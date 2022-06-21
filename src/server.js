'use strict';

// 3rd Party Resources
const express = require('express');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
// const { Sequelize, DataTypes } = require('sequelize');


// Prepare the express app
const app = express();

// const sequelize = new Sequelize('sqlite::memory');




module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('server running on', PORT)),
  // sequelize
}