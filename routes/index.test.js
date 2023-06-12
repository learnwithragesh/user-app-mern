const app = require('../app.js');
const request = require('supertest');

describe('after hitting /api endpoint', () => {
  test.only('responds with 200 statuscode', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
  });

  test.only('response with correct text', async () => {
    const response = await request(app)
      .get('/api')
      .then((response) => {
        expect(response.text).toBe('Welcome! Try user API!');
      });
  });
});