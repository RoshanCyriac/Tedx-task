const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // This is important for Render's SSL certificates
    }
  }
});

module.exports = sequelize; 