const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
const sequelize = require('../../config/db.config')

const db = require("./models");
db.sequelize.sync();

// drop existing tables and re-sync database
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
//

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log("JAI Servidor")
})