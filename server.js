'use strict';

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const indexController = require("./controllers/index.controller");
const { getController, createController, updateController, deleteController } = require("./controllers/listOparations.controller");
const { seedData } = require('./models/todoList.model')
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
/////////////////
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB!!'))

app.get('/', indexController);

app.get('/listItem', getController);
app.post('/listItem', createController);
app.put('/listItem/:id', updateController);
app.delete('/listItem/:id', deleteController);

// seedData();

app.listen(PORT, () =>
  console.log(`the server is running on port ${PORT}`));