'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.belongsToMany(
        models.User,
        {
          through: 'cita',
          foreignKey: 'service_id',
          // as: "citas"
        }
      )

      // Service.belongsToMany(models.Doctor, {
      //   through: "cita",
      //   foreignKey: "service_id"
      // })
    }
  }
  Service.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};