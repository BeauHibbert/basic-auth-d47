'use strict';

const { sequelize } = require('../../../index.js');
const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');


// // Create a Sequelize model
// const Users = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// });

// Users.beforeCreate = (sequelize) => {
//   console.log(sequelize)
// }

module.exports = Users;