const express = require('express');
const { addfoodItem, getAllFoodItem, deleteFoodItem, updatePrice } = require('../controllers/foodItem');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();


router.post("/addfood", verifyToken, addfoodItem);
router.get("/getallfood", getAllFoodItem);
router.delete("/deletefooditem", verifyToken, deleteFoodItem)
router.put("/updateprice", verifyToken, updatePrice);
module.exports = router;
