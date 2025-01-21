const express = require("express");
const route = express.Router();
const Planet = require("../models/Planet");
const fs = require("fs");
const path = require("path");

route.get("/planets", async (req, res) => {
  try {
    let { n } = req.query;
    const data = await Planet.find().limit(n);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
});

route.post("/planet", async (req, res) => {
  try {
    const planet = await Planet.create(req.body);
    res.status(201).json({ planet, message: "Planet was added succefully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
});

route.post("/planets", async (req, res) => {
  try {
    console.log(req.body);
    const planet = await Planet.insertMany(req.body.planets);
    res
      .status(201)
      .json({ planet, message: "Planets were added successfully" });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ status: false, error });
  }
});

// path variable

// route.get("/planets/:id", async (req, res) => {
//   try {
//     const data = await Planet.findById(req.params.id);
//     res.status(200).json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: false, error });
//   }
// });

// query params
route.get("/planets", async (req, res) => {
  try {
    console.log(req.query);
    const data = await Planet.findById(req.query.id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
});

route.patch("/planet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let { apikey } = req.headers;

    if (!apikey) {
      return res.status(401).json({ error: "API KEY NOT FOUND" });
    }
    const data = await Planet.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ message: "planet was updated", data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
});

route.delete("/planet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let { apikey } = req.headers;

    if (!apikey) {
      return res.status(401).json({ error: "API KEY NOT FOUND" });
    }
    const data = await Planet.findByIdAndDelete(id);
    res.status(200).json({ message: "planet was deleted", data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
});

route.get("/planets/images/:filename", (req, res) => {
  try {
    const { filename } = req.params;
    const moonPath = path.resolve("assets", filename);
    const imageContent = fs.readFileSync(moonPath);
    const extension = path.extname(moonPath);
    res.set({ "Content-type": `image/${extension}` }).send(imageContent);
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;