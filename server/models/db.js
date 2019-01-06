const mongoose = require('mongoose');

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
}, (err) => {
    if (!err) {
        console.log('Connected to database => ' + process.env.MONGODB_URI);
    }
    else {
        console.log('Error connecting database => ' + JSON.stringify(err, undefined, 2));
    }
});

// Load models
require('./user.model');