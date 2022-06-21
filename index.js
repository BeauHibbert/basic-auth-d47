'use strict';

let { start, server} = require('./src/server');
// const Users  = require('./src/auth/models/users-model');
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

const PORT = process.env.PORT || 3002

const DATABASE_URL =  process.env.DATABASE_URL || 'sqlite:memory';

// const sequelize = new Sequelize(DATABASE_URL);
const sequelize = new Sequelize('sqlite::memory');

// Create a Sequelize model
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// Process FORM intput and put the data on req.body
server.use(express.urlencoded({ extended: true }));

// make sure our tables are created, start up the HTTP server.
sequelize.sync()
  .then(() => {
    server.listen(PORT, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

  start();

  module.exports = { sequelize };
