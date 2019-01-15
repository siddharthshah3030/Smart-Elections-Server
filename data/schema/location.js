var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:    String,
    locationName : String,
    chairPName : String,
    ChairPIdentity : String,
    
    candidates : [ {name : String, party : { name : String ,abb: String, symbol : String}} ]
})

 region = mongoose.model('region', schema);


