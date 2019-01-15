var mongoose = require('mongoose');

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


//Schemas
var locations = require('./schema/location'); 
var voter = require('./schema/voter'); 
var party = require('./schema/party'); 

var abcd = require('./seedBlockchain/partyBlockchain'); 

// seed only when needed 
//Seeding
// var candies = require('./seedCandidate');
 //var voterLog = require('./seedVoter');
//  var partylog = require('./seedParty');




// party.find({}, function(err, party) {
//     console.log("inside findx of parties for block chain")
//     var userMap = {};
//     console.log(party)

//     party.forEach(function(user) {
//       userMap[user._id] = user;
//     });
// }
// )
