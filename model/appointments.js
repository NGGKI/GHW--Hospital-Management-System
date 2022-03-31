const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Appointments extends Model {}

Appointments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    complaint: DataTypes.STRING,
  },
  { sequelize, timestamps: false,  modelName: "Appointments"}
);

module.exports = Appointments;
