const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

// Include model
const User = mongoose.model("User");

/* ============================================================
    Register Route
  ============================================================ */
module.exports.register = (req, res, next) => {
    // Create user object
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
    });
    // Save user in database
    user.save((err, doc) => {
        if (!err) {
            res.send(doc); // Saved successfully
        } else {
            if (err.code == 11000) {
                // Error thrown
                res.status(422).send(["Duplicate email or mobile found."]);
            } else {
                return next(err);
            }
        }
    });
};

/* ============================================================
    Route to check if user's email is available for registration
  ============================================================ */
module.exports.checkEmailAvailable = (req, res, next) => {
    // Search for user's e-mail in database;
    User.findOne({ email: req.params.email }, (err, user) => {
        if (!err) {
            // Check if user's e-mail is taken
            if (user) {
                res.json({ emailAvailable: false });
            } else {
                res.json({ emailAvailable: true });
            }
        } else {
            return next(err);
        }
    });
};

/* ============================================================
    Route to check if user's mobile is available for registration
  ============================================================ */
module.exports.checkMobileAvailable = (req, res, next) => {
    // Search for user's mobile in database;
    User.findOne({ mobile: req.params.mobile }, (err, user) => {
        if (!err) {
            if (user) {
                res.json({ mobileAvailable: false });
            } else {
                res.json({ mobileAvailable: true });
            }
        } else {
            return next(err);
        }
    });
};

/* ============================================================
    Authenticate Route
  ============================================================ */
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate("local", (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ token: user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
};

/* ============================================================
    User Profile Route
  ============================================================ */
module.exports.profile = (req, res, next) => {
    User.findOne({ _id: req._id }, (err, user) => {
        if (!err) {
            if (!user)
                return res
                    .status(404)
                    .json({ status: false, message: "User record not found." });
            else
                return res
                    .status(200)
                    .json({ status: true, user: _.pick(user, ["name", "email"]) });
        } else {
            return next(err);
        }
    });
};

