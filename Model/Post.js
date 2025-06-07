const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"like"
  }],
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment"
  }]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
