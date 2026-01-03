import mongoose from 'mongoose';
import { MONGODB_URI } from '../common/index.js';

export default async () => {
  await mongoose.connect(MONGODB_URI);
};
