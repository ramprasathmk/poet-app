const mongoose = require('mongoose');

// poem Schema
const poemSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Poem = mongoose.model('Poem', poemSchema);

module.exports = Poem;
