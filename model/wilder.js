const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Collection schema stored in wilderdb
const WilderSchema = new Schema({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, vote: Number}]
});

module.exports = mongoose.model("wilder", WilderSchema);