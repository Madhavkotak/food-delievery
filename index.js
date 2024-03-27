const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const cookies = require('cookie-parser')
app.use(cookies())
//server starting
app.listen(process.env.PORT, () => {
    console.log(`Server started listening at port ${process.env.PORT}`);
});




//db connection
const dbConnect = require('./config/database');
dbConnect();

//routes
const foodroutes = require("./routes/foodItemRoutes")
const restaurantRoutes = require("./routes/restaurantRoutes")
const addressRoutes = require("./routes/addressRoutes")
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes")

//mounting of api
app.use('/api/version1', foodroutes);
app.use('/api/version1', restaurantRoutes);
app.use("/api/version1", addressRoutes);
app.use("/api/version1", userRoutes);
app.use("/api/version1", authRoutes);
app.use("/api/version1", orderRoutes);

//default 
app.get("/", (req, res) => {
    res.send("Hell world");
})


