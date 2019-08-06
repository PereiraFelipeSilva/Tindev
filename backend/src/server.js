const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const mongooseConnect = require('./MongooseConnect');

const server = express();

//comentar esta linha antes de commitar e fazer o push por causa da senha ↓↓↓↓
mongoose.connect(mongooseConnect, {
  useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);