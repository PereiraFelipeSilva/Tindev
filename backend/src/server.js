const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const mongooseConnect = require('./MongooseConnect');
const cors = require('cors');

const server = express();

mongoose.connect(mongooseConnect, {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);