var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:    String,
    candidates : [ {name : String, party : { name : String , symbol : String}} ]
})

var region = mongoose.model('region', schema);


var location = new region( {   name:    "String",
    candidates : [ {name : "String", party : { name : "String" , symbol : "String"}} ]});
location.save(function (err) {
  if (err) return handleError(err);
  // saved!
});