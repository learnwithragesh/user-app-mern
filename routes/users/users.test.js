const app = require('../../app.js');
const request = require('supertest');

describe('GET /api/user', () => {
  test.only('after hiiting endpoint POST /api/user checking content type', async () => {
    const response = await request(app).get('/api/user');
    expect(response.headers['content-type']).toEqual(
      'text/html; charset=utf-8'
    );
  });

  test.only('after hiting endpoint POST /api/user checking it returns users', async () => {
    const response = await request(app).get('/api/user');
    expect(response);
  });
});

describe('POST /api/user/add', () => {
  test.only('if user send invalid firsname ', async () => {
    const response = await request(app).post('/api/user/add').send({
      firstName: 'test1',
      lastName: 'ass',
      email: 'test@gmail.com',
    });
    expect(response.status).toBe(404);
  });

  test.only('if user send invalid lastname ', async () => {
    const response = await request(app).post('/api/user/add').send({
      firstName: 'test',
      lastName: '1',
      email: 'test@gmail.com',
    });
    expect(response.status).toBe(404);
  });

  test.only('if user send invalid email ', async () => {
    const response = await request(app).post('/api/user/add').send({
      firstName: 'test1',
      lastName: 'ass',
      email: 'test@gmail',
    });
    expect(response.status).toBe(404);
  });

  test.only('if user not send  email ', async () => {
    const response = await request(app).post('/api/user/add').send({
      firstName: 'test1',
      lastName: 'ass',
    });
    expect(response.status).toBe(404);
  });

  test.only('if user not send  firstname ', async () => {
    const response = await request(app).post('/api/user/add').send({
      firstName: 'test1',
      lastName: 'ass',
      email: 'test@gmail',
    });
    expect(response.status).toBe(404);
  });

  test.only('if user not send  lastname ', async () => {
    const response = await request(app).post('/api/user/add').send({
      firstName: 'test1',
      email: 'test@gmail',
    });
    expect(response.status).toBe(404);
  });
});