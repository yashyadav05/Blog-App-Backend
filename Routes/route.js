const express = require("express")
const route = express.Router()
const { create,retrieve } = require("../Controller/userPostController")
const { make } = require("../Controller/userCommentController")
const { likeController, unlike } = require("../Controller/userLikesController")


route.post("/posts",create)
route.post("/retrieve",retrieve)
route.post("/comment",make)
route.post("/like",likeController)
route.post("/unlike",unlike)
module.exports = route