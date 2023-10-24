const express = require('express');
const { addAddress, deleteAddress, getAllAddress, updateAddress } = require('../controllers/address');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();


router.post("/addaddress", verifyToken, addAddress);
router.get("/getalladdress", verifyToken, getAllAddress);
router.delete("/deleteaddress/:id", verifyToken, deleteAddress);
router.put("/updateaddress", verifyToken, updateAddress);

module.exports = router;
