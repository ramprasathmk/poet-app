import { Schema, model } from 'mongoose';

// poem Schema
const poemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now
  }
});

const Poem = model('Poem', poemSchema);

export default Poem;
