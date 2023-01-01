const Sequelize = require("sequelize");

require("dotenv").config();

// TODO: test connection https://sequelize.org/docs/v6/getting-started/#testing-the-connection

// create connection to db
const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
			host: "localhost",
			dialect: "mysql",
			port: 3300,
	  });


module.exports = sequelize;
