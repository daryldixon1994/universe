const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connect = require("./connect");
// const route = require("./routes");
connect();
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.use(express.json());
app.use(require("./routes"));

app.listen(5000, () => {
  console.log("Server is up and running");
});
