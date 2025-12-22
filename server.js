import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import serveStatic from 'serve-static';
import { connect } from 'mongoose';
import pkg from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import { config } from 'dotenv';
import Poem from './models/poem.js';
import poemRoutes from './routes/poems.js';

config();
const { urlencoded } = pkg;

// Environment Variables
const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URI;

// MongoDB Connection
connect(DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Express Server
const app = express();
app.use(compression());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  })
);
app.use(urlencoded({ extended: true }));
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(serveStatic(join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/poems', poemRoutes);

// Root Route
// NOTE: Return response.json({ data }) for the API server application.
//       This is Optional but good practice (Recommended) for indegrating with React Frontend.
app.get('/', (req, res) => {
  res.render('index');
});

// Home Route
app.get('/home', (req, res) => {
  res.render('index');
});

// Search route
app.get('/search', async (req, res) => {
  const query = req.query.query;
  try {
    const poemsByTitle = await Poem.find({ title: new RegExp(query, 'i') });
    const poemsByAuthor = await Poem.find({ author: new RegExp(query, 'i') });
    res.render('search', { query, poemsByTitle, poemsByAuthor });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// Listen to the PORT
const server = app.listen(PORT, () => {
  console.log(`Server is running on port \`${PORT}\``);
});

export default { app, server };
