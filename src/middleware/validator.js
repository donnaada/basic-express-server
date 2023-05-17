'use strict';

module.exports = (req, res, next) => {
  if (req.query.name) {
    next();
  } else {
    next('No name found in query string');
  }
};
