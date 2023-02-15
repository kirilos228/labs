require('dotenv').config();
const app2 = require('./app');
const supertest = require("supertest");

const request = supertest(app2);

it('gets Hello World', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(process.env.Hello);
});
