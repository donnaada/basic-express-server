'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  test('Handles the root path', async () => {
    const res = await mockRequest.get('/');
    expect(res.status).toEqual(200);
  });

  test('handles bad request', async () => {
    const res = await mockRequest.get('/bad');
    console.log(res.body);
    expect(res.status).toEqual(500);
    expect(res.body.route).toEqual('/bad');
  });

  test('handle bad method', async () => {
    let res = await mockRequest.post('/');
    expect(res.status).toEqual(404);

    res = await mockRequest.put('/');
    expect(res.status).toEqual(404);

    res = await mockRequest.delete('/');
    expect(res.status).toEqual(404);
  });

  test('handles not found', async () => {
    const res = await mockRequest.get('/foo');
    expect(res.status).toEqual(404);
  });

  test('validate name in query string', async () => {
    let res = await mockRequest.get('/person?something=something');
    expect(res.status).toEqual(500);

    res = await mockRequest.get('/person?name=nam');
    expect(res.status).toEqual(200);
  });

  test('validate output object', async () => {
    let res = await mockRequest.get('/person?something=something');
    expect(res.status).toEqual(500);

    res = await mockRequest.get('/person?name=donna');
    expect(res.body).toEqual({ "name": "donna" });
  });

});


