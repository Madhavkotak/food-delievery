const express = require('express');
const { getCart } = require('../controllers/order');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();


router.get('/getcart', verifyToken, getCart);
module.exports = router;