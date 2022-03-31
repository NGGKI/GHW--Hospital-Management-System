const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const Diagnose = require('./diagnose')

class Appointments extends Model { }

Appointments.init({
  // appointment_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primaryKey: true,
  //   autoIncrement: true
  // },
  // employee_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'employee',
  //     key: 'id'
  //   }
  // },
  // patient_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'patient',
  //     key: 'id'
  //   }
  // },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  complaint: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    sequelize,
    timestamps: false,
    modelName: 'appointment'
  }
)

Appointments.hasMany(Diagnose, {
  foreignKey: 'apointment_id'
})
Diagnose.belongsToMany(Appointments)

module.exports = Appointments