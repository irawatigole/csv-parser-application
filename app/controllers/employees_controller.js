const express = require('express');
const _ = require('lodash');
const router = express.Router();

const { Employee } = require('../models/employee');

router.get('/', (req, res) => {
    Employee.find().then((employees) => {
        res.send(employees); 
    }).catch((err) => {
        res.send(err); 
    });
});

router.post('/', (req,res) => {
    let body = _.pick(req.body, ['companyName', 'address', 'department']);
    let employee = new Employee(body);
    employee.save().then((employee) => {
        res.send({
            employee,
            notice: 'successfully created a employee'
        });
    }).catch((err) => { 
        res.send((err))
    })
})

module.exports = {
    employeesController: router
}