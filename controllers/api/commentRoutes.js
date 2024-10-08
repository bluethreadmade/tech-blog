const router = require('express').Router();
const { Comment, User } = require('../../models');

// create new comment /api/comments/newComment
router.post('/newComment', async (req, res) => {
    try {
        // create the comment with the comment and the userID from session
        // needs postId too
        const commentData = await Comment.create({
            ...req.body,
            userId: req.session.userId,
            content: req.body.newComment,
            postId: req.body.newCommentPostId
        });

        // send a 200 status and the data from the comment
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
