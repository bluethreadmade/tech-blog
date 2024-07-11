const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Creates a relationship between User and Post model, with the User having a "has many" relationship with Post model.
User.hasMany(Post);

// User has many comments
User.hasMany(Comment);

// Post has many comments
Post.hasMany(Comment)

// Creates a relationship between User and Post model, with a "belongs to" relationship of the Post to the User.
Post.belongsTo(User);

// Comment belongs to Post
Comment.belongsTo(Post);

// Comment belongs to User
Comment.belongsTo(User);


module.exports = { User, Post, Comment };