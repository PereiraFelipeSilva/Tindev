const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const mongooseConnect = require('./MongooseConnect');

const server = express();

mongoose.connect(mongooseConnect, {
  useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);