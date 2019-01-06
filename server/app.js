// Import Database Modules
require('./config/config');
require('./models/db');

// Import Node Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load Routes
const rtsIndex = require('./routes/index.router');

// Load express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);

// global error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT || 3000, () => {    
    console.log(`Server listening on port => ${process.env.PORT}`) 
});
