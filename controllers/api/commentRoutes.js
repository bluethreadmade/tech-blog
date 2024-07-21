const router = require('express').Router();
const { Comment } = require('../../models');

// create new comment /api/comments
router.post('/comments'),
    async (req, res) => {
        // check if the user is signed in
        if (req.session.userID) {
            try {
                // create the comment with the comment and the userID from session
                const commentData = await Comment.create({
                    ...req.body,
                    userId: req.session.userId,
                    content: req.body.content,
                });

                // send a 200 status and the data from the comment
                res.status(200).json(commentData);
            } catch (error) {
                console.log(err);
                res.status(500).json(err);
            }
        }
        else{
            return res.status(401);
        }
    };

module.exports = router;