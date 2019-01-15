const express = require('express');
const router = express.Router();

const jwtHelper = require('../config/jwt-helper');

// User Controllers
const ctrlUser = require('../controllers/user.controller');

// User Routes
router.post('/register', ctrlUser.register);
router.get('/checkEmailAvailable/:email', ctrlUser.checkEmailAvailable);
router.get('/checkMobileAvailable/:mobile', ctrlUser.checkMobileAvailable);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/profile', jwtHelper.verifyJwtToken, ctrlUser.profile);

module.exports = router;
