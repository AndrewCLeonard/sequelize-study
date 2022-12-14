const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init({
	postId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	title: {
		type: DataTypes.String,
		allowNull: false,
	},
	sequelize,
	timestamps: false,
	freezeTableName: true,
	underscored: true,
	modelName: "post",
});

module.exports = Post;
