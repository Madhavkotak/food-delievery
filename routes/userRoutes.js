const express = require('express');
const { deleteUser, getAllUser, updateProfile, getInfo } = require('../controllers/user');
const router = express.Router();
const { verifyToken } = require('../middleware/verifyToken');



router.get("/getalluser", verifyToken, getAllUser);
router.delete("/deleteuser/:id", verifyToken, deleteUser);
router.put("/updateprofile", verifyToken, updateProfile);
router.post("/getinfo", getInfo);
module.exports = router;
