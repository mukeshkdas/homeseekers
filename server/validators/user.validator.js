// Validate Function to check name length
let nameLengthChecker = (name) => {
    // Check if name exists
    if (!name) {
        return false; // Return error
    } else {
        // Check length of name string
        if (name.length < 3 || name.length > 30) {
            return false; // Return error if does not meet length requirement
        } else {
            return true; // Return as valid name
        }
    }
};

// Validate Function to check if valid name format
let validNameChecker = (name) => {
    // Check if name exists
    if (!name) {
        return false; // Return error
    } else {
        // Regular expression to test if name format is valid
        // const regExp = new RegExp(/^[a-zA-Z0-9]+$/); // for checking username
        const regExp = new RegExp(/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/);        
        return regExp.test(name); // Return regular expression test result (true or false)
    }
};

// Array of name validators
const nameValidators = [
    // First name validator
    {
        validator: nameLengthChecker,
        message: 'Name must be at least 3 characters but no more than 30'
    },
    // Second name validator
    {
        validator: validNameChecker,
        message: 'Name must not have any special characters and numbers'
    }
];

// Validate Function to check e-mail length
let emailLengthChecker = (email) => {
    // Check if e-mail exists
    if (!email) {
        return false; // Return error
    } else {
        // Check the length of e-mail string
        if (email.length < 6 || email.length > 30) {
            return false; // Return error if not within proper length
        } else {
            return true; // Return as valid e-mail
        }
    }
};

// Validate Function to check if valid e-mail format
let validEmailChecker = (email) => {
    // Check if e-mail exists
    if (!email) {
        return false; // Return error
    } else {
        // Regular expression to test for a valid e-mail
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email); // Return regular expression test results (true or false)
    }
};

// Array of Email Validators
const emailValidators = [
    // First Email Validator
    {
        validator: emailLengthChecker,
        message: 'E-mail must be at least 6 characters but no more than 30'
    },
    // Second Email Validator
    {
        validator: validEmailChecker,
        message: 'Invalid e-mail'
    }
];

// Validate Function to check mobile number
let mobileLengthChecker = (mobile) => {
    // Check if mobile exists
    if (!mobile) {
        return false; // Return error
    } else {
        // Check the length of e-mail string
        if (mobile.length != 10) {
            return false; // Return error if not within proper length
        } else {
            return true; // Return as valid mobile
        }
    }
};

// Validate Function to check if valid mobile format
let validMobileChecker = (mobile) => {
    // Check if mobile exists
    if (!mobile) {
        return false; // Return error
    } else {
        // Regular expression to test for a valid mobile
        const regExp = new RegExp(/^[0][1-9]\d{9}$|^[1-9]\d{9}$/);
        return regExp.test(mobile); // Return regular expression test results (true or false)
    }
};

// Array of Mobile Validators
const mobileValidators = [
    // First Mobile Validator
    {
        validator: mobileLengthChecker,
        message: 'Mobile number should be 10 digits'
    },
    // Second Mobile Validator
    {
        validator: validMobileChecker,
        message: 'Invalid mobile number'
    }
];



// Validate Function to check password length
let passwordLengthChecker = (password) => {
    // Check if password exists
    if (!password) {
        return false; // Return error
    } else {
        // Check password length
        if (password.length < 6 || password.length > 20) {
            return false; // Return error if passord length requirement is not met
        } else {
            return true; // Return password as valid
        }
    }
};

// Validate Function to check if valid password format
let validPasswordChecker = (password) => {
    // Check if password exists
    if (!password) {
        return false; // Return error
    } else {
        // Regular Expression to test if password is valid format
        const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        return regExp.test(password); // Return regular expression test result (true or false)
    }
};

// Array of Password validators
const passwordValidators = [
    // First password validator
    {
        validator: passwordLengthChecker,
        message: 'Password must be at least 6 characters but no more than 20'
    },
    // Second password validator
    {
        validator: validPasswordChecker,
        message: 'Password must have at least one uppercase, lowercase, special character, and number'
    }
];

module.exports = {
    nameLengthChecker,
    validNameChecker,
    emailLengthChecker,   
    validEmailChecker,
    mobileLengthChecker,
    validMobileChecker,
    passwordLengthChecker,
    validPasswordChecker,
    nameValidators,
    emailValidators,
    mobileValidators,
    passwordValidators
}