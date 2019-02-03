const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    companyName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 64
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000
    },
    department: {
        type: String,
        required: true
    }

})

const Employee = mongoose.model('employee', employeeSchema);

module.exports = {
    Employee
}