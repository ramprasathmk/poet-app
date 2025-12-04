import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const DB_URL = process.env.MONGODB_URI;

module.exports = async () => {
  await mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
