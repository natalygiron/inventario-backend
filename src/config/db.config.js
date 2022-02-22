/* const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME
const host = process.env.DB_HOST

const sequelize = new Sequelize(database, "root", "123456", {
    host: host,
    dialect: 'mysql'
  });

module.exports = sequelize */

const database = process.env.DB_NAME

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "db_inventario",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};