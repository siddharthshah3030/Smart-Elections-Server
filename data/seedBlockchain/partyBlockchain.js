// var mongoose = require('mongoose');
// var parties = require('../schema/party'); 


var ij = 1;
party.find({}, function(err, currentParty) {
    // console.log("inside findx of parties for block chain")
    
    currentParty.forEach(function(partyInstance) {
        // @shritesh do you function here
        console.log(ij)
        ij++

    });
}
)

// // console.log("hell from block chain party seeding ")
// var name = "lovation3";

    
//     console.log( "inside main file");
//     party.find().exec(function (err, doc) {
//         console.log( doc );
//     });

