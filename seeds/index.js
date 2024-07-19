const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

const commentSeedData = require('./commentSeedData.json');
const postSeedData = require('./postSeedData.json');
const userSeedData = require('./userSeedData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postSeedData);
  await Comment.bulkCreate(commentSeedData);
  await User.bulkCreate(userSeedData);

  process.exit(0);
};

seedDatabase();