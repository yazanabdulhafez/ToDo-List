'use strict';

const mongoose = require("mongoose");

const listSchema = mongoose.Schema({

  title: { type: String, Unique: true, trim: true },
  description: { type: String },
  date: { type: Date }
});

const listModel = mongoose.model('todoList', listSchema);

const seedData = () => {
  const newList = new listModel({
    title: "Master react js",
    description: "I must master react js from zero to be a hero",
    date: "01-01-2022"
  })
  newList.save();
  console.log(newList);

}


module.exports = { listModel, seedData };