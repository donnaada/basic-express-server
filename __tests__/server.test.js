'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  it('Handles the root path', async () => {
    const res = await mockRequest.get('/');

    // expect(res.status).toEqual(200);
    expect(res.text).toBeTruthy;
  });

  test('handles bad request', async () => {
    const res = await mockRequest.get('/bad');
    console.log(res.body);
    expect(res.status).toEqual(500);
    expect(res.body.route).toEqual('/bad');
  });

  test('handles not found', async () => {
    const res = await mockRequest.get('/foo');
    expect(res.status).toEqual(404);
  });

  // test('validate parameter', async () => {
  //   let res = await mockRequest.get('/person/something');
  //   expect(res.status).toEqual(500);

  //   res = await mockRequest.get('/person/name');
  //   expect(res.status).toEqual(200);
  // });

  // test('validate name', async () => {
  //   let res = await mockRequest.get('/person/somethingElse');
  //   expect(res.status).toEqual(500);

  //   res = await mockRequest.get('/person/name');
  //   expect(res.status).toEqual(200);
  // });

});


