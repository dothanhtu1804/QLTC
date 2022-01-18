require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const route = require("./Routes/index");
const bodyParser = require("body-parser");
const { Singleton } = require("./singleton")
const app = express();



Singleton.Instance();


app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



