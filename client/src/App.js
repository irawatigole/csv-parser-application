import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Form from './components/form'
import FileReader from './components/fileReader';

class App extends Component {
  render() {
    return (
        <div>
          <h2> Employee Listing</h2>
          <Form />
          <FileReader /> 
        </div>
    );
  }
}

export default App;
