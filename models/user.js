'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(
        models.Product,
        {
          through: 'favorites',
          foreignKey: 'user_id'
        }
      )

      User.belongsToMany(
        models.Service,
        {
          through: 'cita',
          foreignKey: 'user_id',
          // as: "citas"
        }
      )

      User.hasMany(models.Doctor, {
        foreignKey: 'user_id'
      });

    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};