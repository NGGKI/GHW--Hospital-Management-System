const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const Appointments = require('./appointments')
const Diagnose = require('./diagnose')
const MedicalHistory = require('./medicalhistory')

class Patient extends Model { } 

Patient.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8]
    }
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  sex: DataTypes.STRING,
  dob: DataTypes.DATEONLY,
  mobile: DataTypes.INTEGER,
  address: DataTypes.STRING,
  primary_care_physician: DataTypes.STRING,
  pcp_contact: DataTypes.INTEGER,  
  insurance: DataTypes.STRING,

  // //make references to medicalhistory model
  // medical_history: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'medicalhistories',
  //     key: 'patient_id'
  //   }
  // },

  // //make references to appt model
  // appointments: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'appointments',
  //     key: 'patient_id'
  //   }
  // }
  
}, { 
  hooks: {
    beforeCreate: async (user) => {
      user.email = await user.email.toLowerCase()
      return user
    },
    beforeUpdate: async (user) => {
      user.email = await user.email.toLowerCase()
      return user
    }
  },
  sequelize, 
  timestamps: false, 
  modelName: 'patient' 
})

Patient.hasMany(Appointments, {
  foreignKey: 'patient_id'
})
Appointments.belongsToMany(Patient)

Patient.hasMany(Diagnose, {
  foreignKey: 'patient_id'
})
Diagnose.belongsToMany(Patient)

Patient.hasMany(MedicalHistory, {
  foreignKey: 'patient_id'
})
MedicalHistory.belongsToMany(Patient)

module.exports = Patient
