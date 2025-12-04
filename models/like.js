import { Types, Schema, model } from 'mongoose';

const likesSchema = new Schema({
  poemId: {
    type: String,
    required: true
  },
  likeCount: {
    type: Number,
    default: 0
  },
  likedUserIds: {
    type: Types.Array,
    default: []
  },
  createdAt: {
    type: Date,
    format: 'YYYY-MM-DD HH:mm:ss',
    default: Date.now
  },
  createdBy: {
    type: String,
    default: 'system'
  },
  updatedAt: {
    type: Date,
    required: true,
    format: 'YYYY-MM-DD HH:mm:ss'
  },
  updatedBy: {
    type: String,
    required: true
  }
});

function countLikes() {
  return this.likedUserIds.length;
}

function addLike(userId) {
  if (!this.likedUserIds.includes(userId)) {
    this.likedUserIds.push(userId);
    this.likeCount = countLikes.call(this);
  }
  return this.likeCount;
}

export default model('Like', likesSchema);
