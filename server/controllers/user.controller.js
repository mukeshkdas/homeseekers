const mongoose = require("mongoose");

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
        }
        else {            
            console.log(err);
            // Error thrown           
            if (err.code == 11000) {
                res.status(422).send(["Duplicate email or mobile found."]);
            }
            else {
                return next(err);
            }
        }
    });
}

/* ============================================================
    Route to check if user's email is available for registration
  ============================================================ */
module.exports.checkEmail = (req, res, next) => {
    // Search for user's e-mail in database;
    User.findOne({ email: req.params.email }, (err, user) => {
        if (err) {
            res.json({ success: false, message: err }); // Return connection error
        } else {
            // Check if user's e-mail is taken
            if (user) {
                res.json({ success: false, message: 'E-mail is already taken' });
            } else {
                res.json({ success: true, message: 'E-mail is available' });
            }
        }
    });
}

/* ============================================================
    Route to check if user's mobile is available for registration
  ============================================================ */
module.exports.checkMobile = (req, res, next) => {
    // Search for user's mobile in database;
    User.findOne({ mobile: req.params.mobile }, (err, user) => {
        if (err) {
            res.json({ success: false, message: err }); // Return connection error
        } else {
            // Check if user's mobile is taken
            if (user) {
                res.json({ success: false, message: 'Mobile is already taken' });
            } else {
                res.json({ success: true, message: 'Mobile is available' });
            }
        }
    });
}
