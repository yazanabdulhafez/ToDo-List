'use strict';

const { listModel } = require('../models/todoList.model');


const getController = (req, res) => {
  listModel.find({}, (error, listData) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send(listData);
    }
  })
}

/////////////////////////////

const createController = (req, res) => {
  const { title, description, date } = req.body;
  listModel.findOne({ title: title }, (error, listData) => {
    if (error) {
      res.send(error.message);
    } else {
      const newData = new listModel({
        title: title,
        description: description,
        date: date
      })
      newData.save();
      console.log(listData);
      res.send(newData);
    }
  });
}

///////////////////////////////

const updateController = (req, res) => {
  const id = req.params.id;
  const { title, description, date } = req.body;
  listModel.findOne({ _id: id }, (error, listData) => {
    if (error) {
      res.send(error.message);
    } else {

      listData.title = title;
      listData.description = description;
      listData.date = date;

      listData.save();
      res.send(listData);
    }
  });
}

///////////////////////////////////

const deleteController = (req, res) => {
  const id = req.params.id;
  listModel.deleteOne({ _id: id }, (error, listData) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send(listData);
    }
  });
}



module.exports = { getController, createController, updateController, deleteController };