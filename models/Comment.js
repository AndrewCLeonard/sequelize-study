const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Comment extends Model {}

Comment.init({
	id: {
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
});
