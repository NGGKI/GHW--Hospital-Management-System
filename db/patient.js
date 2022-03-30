const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

class Patient extends Model { } 

Patient.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DOB: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mobile: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  primary_care_physician: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pcp_contact: {
    type: DataTypes.STRING,
    allowNull: false
  },
  insurance: {
    type: DataTypes.STRING,
    allowNull: false
  },
  medical_history: {
    type: DataTypes.STRING,
    allowNull: false
  },
  appointments: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
}, { sequelize, modelName: 'patient' })

module.exports = Patient
