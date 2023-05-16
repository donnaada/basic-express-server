'use strict';

//TODO: Write Middleware

module.exports = (req, res, next) => {
  if(req.params.name === 'name'){
    next();
  } else {
    next('Path parameter must be a name');
  }
};
