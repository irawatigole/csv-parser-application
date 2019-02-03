import React from 'react';
import axios from 'axios';
import EmployeeTable from './employeeTable';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employees: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
        axios.get('http://localhost:3000/employees').then((response) => {
            this.setState({
                employees: response.data         
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    
    addForm(formData){
        axios.post('http://localhost:3000/employees', formData).then((response) => {
            console.log(response.data)
            const freshEmployees = [...this.state.employees, response.data]
            
            this.setState(prevState => ({
                employees: freshEmployees         
            }))
        }).catch((err) => {
            console.log(err);
        })
    }

    handleSubmit(e){
   
        const formData = {
            companyName: e.target[0].value,
            address: e.target[1].value,
            department: e.target[2].value    
        }
        e.preventDefault();
        this.addForm(formData);  
    
    }
    render(){
        return (
            <div>
    
                <h2>Listing employees - {this.state.employees.length}</h2>
                <EmployeeTable employees={this.state.employees}  />
                
        
                <form onSubmit={this.handleSubmit}>
                    <label>Company Name <input type="text" /></label><br/>
                    <label> Address <input type="textarea" /></label><br/>
                    <label> Department 
                        <select>
                            <option value=""> Select</option>
                            <option value="Technical"> Technical </option>
                            <option value="Sales"> Sales </option>
                            <option value="Hr"> Hr </option>
                        </select>
                    </label><br/>
                    
                    <input type="submit" value="Add Employee" />

                </form>
                 
            </div>
        )
    }
}

export default Form;