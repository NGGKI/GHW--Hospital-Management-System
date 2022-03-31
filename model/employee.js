const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const Appointments = require('./appointments')
const Diagnose = require('./diagnose')
const EmpSched = require('./empSched')
const Patient = require('./patient')

class Employee extends Model { }

Employee.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
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
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  sex: DataTypes.STRING,
  dob: DataTypes.DATEONLY,
  mobile: DataTypes.INTEGER,
  salary: DataTypes.INTEGER
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
  modelName: 'employee' 
})


// Employee.hasMany(EmpSched, {
//   foreignKey: 'employee_id'
// })
// EmpSched.belongsTo(Employee)

// Employee.hasMany(Appointments, {
//   foreignKey: 'employee_id'
// })
// Appointments.belongsToMany(Employee)

// Employee.hasMany(Diagnose, {
//   foreignKey: 'employee_id'
// })
// Diagnose.belongsToMany.(Employee)


module.exports = Employee
