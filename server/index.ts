const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cryptoJS = require('crypto-js');
const dotenv = require('dotenv').config();
const PORT:number=5500
const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.CONNECTION);
app.listen(PORT,(()=>{
    console.log("Server is running")
}))


