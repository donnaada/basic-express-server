'use strict';

// require('dotenv').config();
const express = require('express');
const cors = require('cors');

const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

const PORT = process.env.PORT || process.env.PORT2;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);


//ROUTES
app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to our Server!!');
});

app.get('/person', validator, (req, res, next) => {
  res.status(200).send(req.query);
});

app.get('/bad', (req, res, next) => {
  next('You have reached a bad path');
});

app.use('*', notFound);
app.use(serverError);

const start = (port) => app.listen(PORT, () => console.log(`We good and on port ${PORT}`));

module.exports = { start, app };
