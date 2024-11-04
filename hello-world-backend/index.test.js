const request = require('supertest');
const app = require('./index');

describe('API Endpoint Testing', () => {
  it('GET / - should return Hello World from Express.js!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World from Express.js!');
  });

  it('GET /health - should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('OK');
  });

  it('GET /version - should return 1', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('1');
  });

  it('GET /hello/:name - should return personalized greeting', async () => {
    const name = 'John';
    const res = await request(app).get(`/hello/${name}`);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(`Hello ${name} from Express.js!`);
  });
});
