import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var mongoose = require("mongoose");

var url = 'mongodb://sid:sid3030@ds155864.mlab.com:55864/votingapp';


try {
  mongoose.connect(url, {
      //useMongoClient: true
  })    
  var schema = new mongoose.Schema({ name: 'string', verified: 'bool', voted: 'bool', location: 'string' });
  var voters = mongoose.model('voters', schema);


} catch (error) {
  console.log("mongo connect error")
  
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
