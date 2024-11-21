const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/poet_app';

module.exports = async () => {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};
