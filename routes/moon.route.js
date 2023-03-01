const express = require("express")
const Post = require("../models/moon.model")
const router = express.Router()

async function init() {
    let user = new Post({ name: "Hey from Abu Mohammed" })
    await user.save();
}

init().catch(e => 'could not initilaize DB')

router.get("/", async (req, res) => {
	const posts = await Post.findOne()
	res.send(posts.name)
})

module.exports = router