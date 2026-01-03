import request from 'supertest';
import { app } from '../server.js';
import mongoose from 'mongoose';
import { MONGODB_URI } from '../common/index.js';

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
  await mongoose.connection.close();
});

// MongoDB Database Connection Test
describe('Database Connection', () => {
  it('should connect to the database', async () => {
    const database = await mongoose.connect(MONGODB_URI);

    if (!database) throw new mongoose.Error('Database is not Connected! :(');
    else console.log('MongoDB Connected Successfully :)');
  });
});
