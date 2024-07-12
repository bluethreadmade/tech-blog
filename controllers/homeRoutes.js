const router = require('express').Router();
const {  Post, Comment, User  } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll();

    res.render('layouts/main', {
      allPosts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // ? GET one gallery
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // ? GET one painting
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;