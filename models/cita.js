'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cita.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Cita.belongsTo(models.Doctor, {
        foreignKey: 'doctor_id'
      });

      Cita.belongsTo(models.Service, {
        foreignKey: 'service_id'
      });
    }
  }
  Cita.init({
    user_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cita',
  });
  return Cita;
};