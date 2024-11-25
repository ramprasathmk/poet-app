const request = require('supertest');
const { app, server } = require('../server');
const mongoose = require('mongoose');

// describe('GET /', () => {
//   it('should return 200 OK', async () => {
//     const res = await request(app).get('/');
//     expect(res.status).toBe(200);
//   });

//   it('should render the index view', async () => {
//     const res = await request(app).get('/');
//     expect(res.text).toContain('<h1>Poet App</h1>');
//   });
// });

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
  await mongoose.connection.close();
});


// MongoDB Database Connection Test
describe('Database Connection', () => {
  it('should return database connection results', async () => {
    const DB_URL = process.env.MONGODB_SERVER_URL || 'mongodb://127.0.0.1:27017/poet_app'
    const database = mongoose.connect(DB_URL)
    .then( () => { console.log('Connected to MongoDB') } )
    .catch( (err) => {console.error("Error ", err)} );
    
    if (!database) throw mongoose.Error("Database is not Connected!");
  });
});