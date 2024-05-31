const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");

const app = express()

const PORT = process.env.PORT || 84;

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/aplha"

console.log(MONGO_URI)

mongoose
    .connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server RUNNING on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err));