var mongoose = require('mongoose');
var cn = require('./constantNames');
var db = require('./schema/location');
var faker = require('faker')
faker.locale = "en_IND";

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 256; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  

// var abbParties = ['BJP', 'AITC', 'BSP', 'CPI', 'INC', 'NCP', 'AAP', 'NPP', 'SS', 'SP'];
var parties = [

    ['Bharatiya Janata Party','BJP','url0'],
    ['All India Trinamool Congress','AITC','url1'],
    ['Bahujan Samaj Party','BSP','url2'],
    ['Communist Party of India','CPI','url3'],
    ['Indian National Congress','INC','url4'],
    ['Nationalist Congress Party','NCP','url5'],
    ['Aam Aadmi Party','AAP','url6'],
    ["National People's Party",'NPP','url7'],
    ['Shiv Sena','SS','url8'],
    ['Samajwadi Party','SP','url9']
]

// a copy to make changes and shuffle 
var PAR = parties
// var symbol = [
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
//     'stringUrl',
// ]

str = JSON.stringify(cn);
console.log(str);
str = JSON.stringify(cn, null, 4); // (Optional) beautiful indented output.
var cnt = 1;
for (var i = 0; i < 500; ) {
    PAR.sort( function() { return 0.5 - Math.random() } );

    faker.seed(i);

    var location = new campaign({
        name: "location" + (cnt),
        locationName : faker.address.streetName(),
        chairPName : faker.name.findName(),
        ChairPIdentity : makeid(),
        })
    cnt++;
    faker.seed(501 + i);

    while (1) {

        candi = {
            name: faker.name.findName(),
            party: {
                name: PAR[i % 10][0],

                abb: PAR[i % 10][1],

                symbol: PAR[i % 10][2]
            }
        }
        location.candidates.push(candi)
        i++;
        if (i % 5 == 0) {
            break;
        }
    };



    console.log(location)
    location.save(function(err) {
        if (err) return handleError(err);
        // saved!
    });
}