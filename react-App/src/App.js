import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var mongoose = require("mongoose");

var url = 'mongodb://sid:sid3030@ds155864.mlab.com:55864/votingapp';


// try {
//   console.log("try function  in app.js")
//   var mongoDB = 'mongodb://sid:sid3030@ds155864.mlab.com:55864/votingapp';
//   mongoose.connect(mongoDB);
//   // Get Mongoose to use the global promise library
//   mongoose.Promise = global.Promise;
//   //Get the default connection
//   var db = mongoose.connection;
  
//   //Bind connection to error event (to get notification of connection errors)
//   db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
//   var schema = new mongoose.Schema({ name: 'string', size: 'string' });
//   var Tank = mongoose.model('Tank', schema);
  
//   var small = new Tank({ size: 'small' });
//   small.save(function (err) {
//     // if (err) return handleError(err);
//     console.log(err)
//     // saved!
//   });
  
//   // or
  
//   Tank.create({ size: 'small' }, function (err, small) {
//     console.log(err)
//     // saved!
//   });
  
//   // or, for inserting large batches of documents
//   Tank.insertMany([{ size: 'small' }], function(err) {
  
//   });

// } catch (error) {
//   console.log("mongo connect error")
  
// }



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
