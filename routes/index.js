const express = require("express");
const route = express.Router();
const Planet = require("../models/Planet");

route.get("/planets", async (req, res) => {
  try {
    const data = await Planet.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
});

route.post("/planets", async (req, res) => {
  try {
    console.log(req.body);
    const planet = await Planet.create(req.body);
    res.status(201).json({ planet, message: "Planet was added succefully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
});

module.exports = route;
