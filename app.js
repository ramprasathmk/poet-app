import express from 'express';
import serveStatic from 'serve-static';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import compression from 'compression';
import cors from 'cors';
import pkg from 'body-parser';

import poemRoutes from './routes/poems.js';
import Poem from './models/poem.js';

const { urlencoded } = pkg;
const app = express();

app.use(compression());
app.use(cors());
app.use(urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(serveStatic(join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/poems', poemRoutes);

app.get('/', (req, res) => res.render('index'));
app.get('/home', (req, res) => res.render('index'));

app.get('/search', async (req, res) => {
  const query = req.query.query;
  try {
    const poemsByTitle = await Poem.find({ title: new RegExp(query, 'i') });
    const poemsByAuthor = await Poem.find({ author: new RegExp(query, 'i') });

    res.render('search', { query, poemsByTitle, poemsByAuthor });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default app;
