const express = require('express');
const router = express.Router();

const { logIn, signUp, logOut } = require('../controllers/auth');

router.post('/login', logIn);
router.post('/signup', signUp);
router.get('/logout', logOut);


module.exports = router;
