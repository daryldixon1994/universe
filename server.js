const express = require("express");
const app = express();
require("dotenv").config();
const connect = require("./connect");
// const route = require("./routes");
connect();

app.use(express.json());
app.use(require("./routes"));

app.listen(5000, () => {
  console.log("Server is up and running");
});
