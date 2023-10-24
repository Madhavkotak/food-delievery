const express = require('express');
const { addRestaurant, deleteRestaurant, getAllRestaurant,updateRestaurantAddress } = require('../controllers/restaurant');
const router = express.Router();


router.post("/addrestaurant",verifyToken, addRestaurant);
router.get("/getallrestaurant",verifyToken, getAllRestaurant);
router.delete("/deleterestaurant/:id", verifyToken,deleteRestaurant);
router.put("/updaterestaurantaddress",verifyToken,updateRestaurantAddress);

module.exports = router;