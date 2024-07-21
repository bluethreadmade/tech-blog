// import just the router express
const router = require('express').Router();
const apiRoutes = require('./api');

// import the models
const { User, Post, Comment } = require("../models");

// handle api routes
router.use('/api', apiRoutes);

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postsData = await Post.findAll();

        const posts = postsData.map((post) => 
            post.get({ plain: true })
        );

        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn
        });

        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// render login page
router.get('/login', async (req, res) => {
    try {
        res.render('login');

        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// render signUp page
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');

        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// view one post
router.get('/onePost/:id', async(req, res) => {
    try {
        // find the post id
        const postData = await Post.findByPk(req.params.id);
        // get the posts data
        const post = postData.get({ plain: true });

        // render the hbs file onePost with the data from Post
        res.render('onePost', {
            post,
        });

        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
