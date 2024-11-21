const mongoose = require('mongoose');

/**
 *  Schema of the Poem
 */
const poemSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Poem', poemSchema);
