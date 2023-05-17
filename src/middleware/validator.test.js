'use strict';

//if using index.js, we could just use `require('.')`

const validator = require('./validator');

describe('Validator Middleware', () => {
  let res = {};
  let req = {};
  let next = jest.fn();

  test('Throws an error, as expected', () => {
    req = { query: { something: 'something' } };
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('No name found in query string');
  });

  test('Runs Successfully, as expected', async () => {
    req = { query: { name: 'donna' } };
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});

