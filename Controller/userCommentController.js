const asyncHandler = require("express-async-handler");
const comment = require("../Model/Comment");
const postModel = require("../Model/Post")


const make = asyncHandler(async(req, res) => {
  const { body, post, user } = req.body;

  if (!body || !post || !user) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const userComment = new comment({
    body,
    post,
    user
  });

  const savedComment = await userComment.save();

  const update = await postModel
    .findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } }, // ✅ match schema
      { new: true }
    )
    .populate("comments") // ✅ match schema
    .exec();

  res.status(200).json({
    message: "Comment added successfully",
    post: update
  });
});



module.exports = {make}