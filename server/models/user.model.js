const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const REGEX = require("../config/regex");

// User Schema Definition
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [30, "Name must not be longer than 30 characters"]
        // match: [REGEX.NAME_REGEX, 'Name must not have any special characters and numbers']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, "E-mail is required"],
        minlength: [6, "E-mail must be at least 6 characters long"],
        maxlength: [30, "E-mail must not be longer than 30 characters"],
        match: [REGEX.EMAIL_REGEX, "Invalid e-mail"]
    },
    mobile: {
        type: String,
        required: [true, "Mobile is required"],
        trim: true,
        unique: true,
        minlength: [10, "Mobile number must be 10 digits long"],
        maxlength: [10, "Mobile number must be 10 digits long"],
        match: [REGEX.MOBILE_REGEX, "Invalid mobile number"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
        maxlength: [15, "Password must not be longer than 15 characters"],
        match: [
            REGEX.PASSWORD_REGEX,
            "Password must have at least one uppercase, lowercase, special character, and number"
        ]
    },
    saltSecret: String
});

// Custom validation for email
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// Path validation
// Unique email validation
userSchema.path("email").validate(function (value) {
    return mongoose
        .model("User")
        .count({ email: value })
        .exec()
        .then(function (count) {
            return !count;
        })
        .catch(function (err) {
            throw err;
        });
}, "Email already exists");

// Unique mobile validation
userSchema.path("mobile").validate(function (value) {
    return mongoose
        .model("User")
        .count({ mobile: value })
        .exec()
        .then(function (count) {
            return !count;
        })
        .catch(function (err) {
            throw err;
        });
}, "Mobile number already exists");

// Events
userSchema.pre("save", function (next) {
    // Ensure password is new or modified before applying encryption
    if (!this.isModified("password")) return next();
    // Apply password encryption
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err); // Ensure no errors
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION_DURATION
    });
};

// Register model with mongoose
mongoose.model("User", userSchema);
