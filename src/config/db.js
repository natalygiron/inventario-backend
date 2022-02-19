const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME
const host = process.env.DB_HOST

const sequelize = new Sequelize(database, "root", "123456", {
    host: host,
    dialect: 'mysql'
  });

module.exports = sequelize