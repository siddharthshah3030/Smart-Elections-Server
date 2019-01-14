var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:    String,
    candidates : [ {name : String, party : { name : String ,abb: String, symbol : String}} ]
})

var region = mongoose.model('region', schema);


