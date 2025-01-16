require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.URI;
module.exports = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
