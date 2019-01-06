const express = require('express');
const router = express.Router();

// User Controllers
const ctrlUser = require('../controllers/user.controller');

// User Routes
router.post('/register', ctrlUser.register);
router.get('/checkEmail/:email', ctrlUser.checkEmail);
router.get('/checkMobile/:mobile', ctrlUser.checkMobile);

module.exports = router;
