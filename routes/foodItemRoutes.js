const express = require('express');
const { addfoodItem, getAllFoodItem, deleteFoodItem,updatePrice } = require('../controllers/foodItem');
const router = express.Router();


router.post("/addfood", addfoodItem);
router.get("/getallfood", getAllFoodItem);
router.delete("/deletefooditem", deleteFoodItem)
router.put("/updateprice",updatePrice);
module.exports = router;
