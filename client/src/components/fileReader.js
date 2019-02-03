import React from 'react';
import Papa from 'papaparse';
import axios from 'axios';

class FileReader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        csvfile: undefined,
        employees:[]
      };
      this.updateData = this.updateData.bind(this);
      
    }
  
    handleChange = event => {
      this.setState({
        csvfile: event.target.files[0]
      });
    };
  
    importCSV = () => {
      const { csvfile } = this.state;
      Papa.parse(csvfile, {
        complete: this.updateData,
        header: true 
      });
    };
    
    updateData(result) {
      var data = result.data;
      for (let i=data.length;i>=0; i--){ 
 
        axios.post('http://localhost:3000/employees', data[i]).then((response) => {
            console.log(response.data)
           
        }).catch((err) => {
            console.log(err);
        })
      } 
      this.setState({employess: data})
    }
   
    render() {
      return (      
        <div className="App">
            <h4>Upload your CSV File!</h4>
          <input
            className="csv-input"
            type="file"
            ref={input => {
              this.filesInput = input;
            }}
            name="file"
            placeholder={null}
            onChange={this.handleChange}
          />
          <p />
          <button onClick={this.importCSV}> Upload now!</button><br/>
          
        </div>
      );
    }
  }

export default FileReader;
