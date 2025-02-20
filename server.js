const express = require("express");
const app = express(); //Initialize Express
const mongoose = require("mongoose"); //doing nothing for now
const logger = require("morgan");
// const connectDB = require(".config/database");
const mainRoutes = require("./routes/main");
const loginRoutes = require("./routes/login");

require("dotenv").config({ path: "./config/.env" });

// connectDB();

app.set("view engine", "ejs");

app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logger
app.use(logger("dev"));

//Skip Passport for now

//Skip methodoverride

//Skip Sessions

//Skip Flash

// Routes
app.use("/", mainRoutes);
app.use("/login", loginRoutes);

//Server listening
app.listen(process.env.PORT, () => {
	console.log("Server is running on port " + process.env.PORT);
});
