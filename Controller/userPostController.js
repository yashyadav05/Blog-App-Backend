const asyncHandler = require("express-async-handler");
const Post = require("../Model/Post"); // use 'Post' instead of 'userPost'

// @desc    Create a new blog post
// @route   POST /api/posts
// @access  Private
const create = asyncHandler(async (req, res) => {
  const { title, body, likes, comment } = req.body;

//   const authorId = req.user._id;

  if (!title || !body) {
    return res.status(400).json({ message: "Title and body are required." });
  }

  const newPost = new Post({
    title,
    body,
  });

  const savedPost = await newPost.save();

  res.status(201).json({
    message: "Post created successfully",
    post: savedPost,
  });
});


const retrieve = asyncHandler(async(req,res)=>{
    const fetch = await Post.find({})
    res.status(201).json({
        success:true,
        data:fetch,
        message:"Fetch Successfully"
    })
})

module.exports = { 
    create,
    retrieve
};
