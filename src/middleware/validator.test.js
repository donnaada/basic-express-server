'use strict';

//if using index.js, we could just use `require('.')`

const validator = require('./validator');

describe('Validator Middleware', () => {
  let res ={};
  let req = {};

  // this mocks the next function
  let next = jest.fn();

  test('Throws an error, as expected', () => {
    req = {params: {something: 'something'}};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Path parameter must be a name');
  });

  test('Runs Successfully, as expected', () => {
    req = {params: {name: 'name'}};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });
});

