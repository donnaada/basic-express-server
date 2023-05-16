'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.get('/', (req, res, next) => {
  req.status(200).send('Welcome to our Server!!');
});

// app.get('/person', validator, (req, res, next) => {
//   let nameData = {
//     personName: req.query.personName,
//   };
//   res.status(200).json(nameData);
// });

app.get('/person/:name', validator, (req, res, next) => {
  let nameData = {
    name: req.params,
  };
  res.status(200).json(nameData);
});

app.get('/bad', (req, res, next) => {
  next('You have reached a bad path');
});

app.use('*', notFound);
app.use(serverError);
console.log(PORT);
const start = (port) => app.listen(PORT, () => console.log(`We good and on port ${PORT}`));

module.exports = { start, app };
