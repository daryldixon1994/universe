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
      type: {
        surfaceValue: Number,
        surfaceExponent: Number,
      },
    },
    volume: {
      type: {
        volumeValue: Number,
        volumeExponent: Number,
      },
    },
    mass: {
      type: {
        massValue: Number,
        massExponent: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Planet = mongoose.model("planets", planetSchema);
