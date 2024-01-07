

const Employee = require('../models/employeeModel')
const { faker } = require('@faker-js/faker')


const mongoose = require('mongoose');
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("connected to db");
    } catch (error) {
      console.error(error);
    }
  };
connectDB()



const gensampledata = () => {
    const employees = []

    for (let i = 0; i < 5; i++) {
        
        const firstname = faker.person.firstName()
        const lastname = faker.person.lastName()
        const email = faker.internet.email()
        const site = ''
        const location = ''
        const department = ''


        
        employees.push({
            firstname,
            lastname,
            email,
            site,
            location,
            department
        }) 

    }
    return employees
}

employeesl = gensampledata()

Employee.insertMany(employeesl).then(docs => console.log(`${docs.length} users have been inserted into the database.`))
.catch(err => {
  console.error(err);
  console.error(`${err.writeErrors?.length ?? 0} errors occurred during the insertMany operation.`)
})
console.log(employeesl)