const mongoose = require("mongoose");

let moonSchema = new mongoose.Schema({
  name: String
});

let Moon = mongoose.model("Moon", moonSchema);
module.exports = Moon;