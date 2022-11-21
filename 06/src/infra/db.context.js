const Sequelize = require('sequelize');

const DbContext = new Sequelize('sqlite::memory');

module.exports = DbContext;