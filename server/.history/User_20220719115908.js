const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class User extends Model {};

User.init({
  first_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  surname: {
    type: DataTypes.STRING
  },
  tele_num: {
    type: DataTypes.NUM
  },
  dateofbirth: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  comments: {
    type: DataTypes.STRING
  },
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
})

module.exports = User;