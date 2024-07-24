const router = require('express').Router();
const { Post } = require('../../models');

// Create post /api/posts/newPost
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

// Update post - /api/posts/:id
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!postData) {
            res.status(404).json({
                message: 'No post found with this id!',
            });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete post - /api/posts/:id
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: { id: req.params.id },
        });

        if (!postData) {
            res.status(404).json({
                message: 'No post found with this id!',
            });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
