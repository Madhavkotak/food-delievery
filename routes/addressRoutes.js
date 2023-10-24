const express = require('express');
const { addAddress, deleteAddress, getAllAddress, updateAddress } = require('../controllers/address');
const router = express.Router();


router.post("/addaddress", addAddress);
router.get("/getalladdress", getAllAddress);
router.delete("/deleteaddress/:id", deleteAddress);
router.put("/updateaddress", updateAddress);

module.exports = router;
