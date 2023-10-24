const express = require('express');
const { addRestaurant, deleteRestaurant, getAllRestaurant,updateRestaurantAddress } = require('../controllers/restaurant');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();


router.post("/addrestaurant",verifyToken, addRestaurant);
router.get("/getallrestaurant", getAllRestaurant);
router.delete("/deleterestaurant/:id", verifyToken,deleteRestaurant);
router.put("/updaterestaurantaddress",verifyToken,updateRestaurantAddress);

module.exports = router;