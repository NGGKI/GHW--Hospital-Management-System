const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class MedicalHistory extends Model { }


MedicalHistory.init({
    // patient_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'patients',
    //         key: 'id'
    //     }
    // },
    year: {
        type: DataTypes.DATE,
        allowNull: false
    },
    condition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surgeries: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medication: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
},
    {
    sequelize,
    modelName: 'medicalhistories'    
    }
)

module.exports = MedicalHistory