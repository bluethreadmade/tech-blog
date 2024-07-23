const router = require('express').Router();
const { Post } = require('../../models');

// Create post
router.post('/newPost', async (req, res) => {
    try {
        // create the post with the content and userid from the session
        const postData = await Post.create({
            ...req.body,
            userId: req.session.userId,
            content: req.body.newPostContent,
            title: req.body.newPostTitle,
        });

        // send 200 status and the data from the post
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update post
// Delete post

module.exports = router;