import React from 'react';
import ReactToExcel from 'react-html-table-to-excel';

const EmployeeTable = (props) => {
    return (
        <div>
        <table border="1" id="table-to-xls">
                    <thead>
                        <tr bgcolor="#FF0000">
                            <th>Sr.No</th>
                            <th> Company Name </th>
                            <th> Address </th>
                            <th> Department </th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.employees.map((employee,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td> {employee.companyName} </td>
                                    <td> {employee.address} </td>
                                    <td> {employee.department} </td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
                <ReactToExcel 
                className="download-table-xls-button"
                table="table-to-xls"
                filename="employeeTable"
                sheet="sheet 1"
                bottomText="EXPORT"
                />
                </div>
    )
}

export default EmployeeTable;