const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planetSchema = new Schema(
  {
    planetName: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    adjectives: {
      type: [String],
    },
    orbitalPeriod: {
      type: Number,
    },
    orbitalSpeed: {
      type: Number,
    },
    meanRadius: {
      type: Number,
    },
    sign: {
      type: String,
    },
    surfaceArea: {
      type: Number,
    },
    volume: {
      type: Number,
    },
    mass: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Planet = mongoose.model("planets", planetSchema);
