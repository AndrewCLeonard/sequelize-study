const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Comment extends Model {}

Comment.init({
	commentId: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	comment_text: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [1],
		},
	},
	sequelize,
	timestamps: false,
	freezeTableName: true,
	underscored: true,
	modelName: "comment",
});

module.exports = Comment