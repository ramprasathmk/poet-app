require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Poem = require('./models/poem');
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGODB_URL;

const database = mongoose.connect(DB_URL)
.then(() => console.log("Connected to MongoDB"));

if (!database) return err;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/poems', require('./routes/poems'));

// Root route 
app.get('/', async (req, res) => { 
    try { 
        const poems = await Poem.find(); 
        res.render('index', { poems }); 
    } catch (err) { 
        console.error(err); 
        res.status(500).send(err.message); 
    } 
});

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
