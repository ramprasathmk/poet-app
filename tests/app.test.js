import request from 'supertest';
import app from '../app.js';

describe('GET /search', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/search?query=test');
    expect(res.status).toBe(200);
  });

  it('should return search results page', async () => {
    const res = await request(app).get('/search?query=test');
    expect(res.text).toContain('Search');
  });
});
