const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.MONGODB_LOCAL_URL;

module.exports = async () => {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};
