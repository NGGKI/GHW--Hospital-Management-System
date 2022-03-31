const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class EmpSched extends Model { } 

EmpSched.init({
  // employee_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'employees',
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
  // patient_list: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'patients',
  //     key: 'id'
  //   }
  // },
},
  {
    sequelize,
    timestamps: false,
    modelName: 'empScheds'
  } 
)

module.exports = EmpSched