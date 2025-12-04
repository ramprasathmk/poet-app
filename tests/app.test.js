import request from 'supertest';
import { app, server } from '../server';
import { connection, connect, Error } from 'mongoose';
const DB_URL = process.env.MONGODB_URI;

describe('GET /search', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/search?query=test');
    expect(res.status).toBe(200);
  });

  it('should return search results', async () => {
    const res = await request(app).get('/search?query=test');
    expect(res.text).toContain('Search Results for');
  });
});

afterAll(async () => {
  server.close();
  await connection.close();
});

// MongoDB Database Connection Test
describe('Database Connection', () => {
  it('should return database connection results', async () => {
    const database = await connect(DB_URL);

    if (!database) throw Error('Database is not Connected! :(');
    else console.log('MongoDB Connected Successfully :)');
  });
});
