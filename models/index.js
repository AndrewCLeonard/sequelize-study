// import all models
const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

// create associations
// not necessary to define foreign key? https://sequelize.org/docs/v6/core-concepts/assocs/#options-1
// ON DELETE defaults to SET NULL and ON UPDATE defaults to CASCADE.

// User Post
User.hasMany(Post, {
	foreignKey: "post_id",
});

Post.belongsTo(
	User
	// , {
	// foreignKey: "user_id",
	// onDelete: "SET NULL",
	// }
);

// User Comment
User.hasMany(Comment, {
	foreignKey: "commentId",
});
Comment.belongsTo(User);

// Post Comment
Post.hasMany(Comment, {
	foreignKey: "commentId",
});
Comment.belongsTo(Post);

module.exports = { Comment, Post, User };
