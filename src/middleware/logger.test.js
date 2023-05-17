'use strict';

const logger = require('./logger');

describe('Logger', () => {

  let res = {};
  let req = {};
  let next = jest.fn();

  test('Logging as expected', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  })

})