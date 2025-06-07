const asyncHandler = require("express-async-handler")
const Like = require("../Model/Likes")
const Post = require("../Model/Post")

const likeController = asyncHandler(async (req, res) => {
    const { post, user } = req.body
    if (!post || !user) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const userLike = new Like({ post, user })
    const savedLike = await userLike.save()

    const update = await Post.findByIdAndUpdate(
        post,
        { $push: { likes: savedLike._id } },
        { new: true }
    ).populate("likes").exec()

    res.status(200).json({
        message: "Like added successfully",
        post: update
    })
})

const unlike = asyncHandler(async (req, res) => {
    const { post, like } = req.body
    if (!post || !like) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const deleteLike = await Like.findOneAndDelete({ post: post, _id: like })

    const updateDeleteSchema = await Post.findByIdAndUpdate(
        post,
        { $pull: { likes: deleteLike._id } },
        { new: true }
    )

    res.status(200).json({
        message: "Like removed successfully",
        post: updateDeleteSchema
    })
})

module.exports = { likeController, unlike }