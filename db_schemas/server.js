const express = require('express');
const app = express();
const db = require('./app/config/db.config.js');
const dotenv = require('dotenv');
dotenv.config();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.DIALECT,
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get('/api/test', (req, res) => {
  console.log('test is successful');
  res.send('test is successful');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
