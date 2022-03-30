const { Employee } = require('../model')

const employeesData = [
  {
    name: "Kien Hoang",
    sex: "male",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Sean Cruz",
    sex: "male",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Hye Won Park ",
    sex: "male",
    dob: 2011 - 11 - 27,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Brendon Sanfer",
    sex: "male",
    dob: 2002 - 11 - 27,
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  }
]

const seedEmployees = () => Employee.bulkCreate(employeesData)

module.exports = seedEmployees