const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema Definition
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [30, 'Name must not be longer than 30 characters'],
        match: [/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/, 'Name must not have any special characters and numbers']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: [true, 'E-mail is required'],
        minlength: [6, 'E-mail must be at least 6 characters long'],
        maxlength: [30, 'E-mail must not be longer than 30 characters'],
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid e-mail']
    },
    mobile: {
        type: String,
        required: [true, 'Mobile is required'],
        trim: true,
        unique: true,
        minlength: [10, 'Mobile number must be 10 digits long'],
        maxlength: [10, 'Mobile number must be 10 digits long'],
        match: [/^[0][1-9]\d{9}$|^[1-9]\d{9}$/, 'Invalid mobile number']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: [15, 'Password must not be longer than 15 characters'],
        match: [/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/, 'Password must have at least one uppercase, lowercase, special character, and number']
    },
    saltSecret: String
});

// Custom validation for email
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

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

// Pre-validation
// userSchema.pre('validate', function(next) {
//     if (!this.created_at) this.created_at = new Date();    
//     this.updated_at = new Date();
//     next();
// });

// Register model with mongoose
mongoose.model('User', userSchema);