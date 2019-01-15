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

    ['Bharatiya Janata Party','BJP'],
    ['All India Trinamool Congress','AITC'],
    ['Bahujan Samaj Party','BSP'],
    ['Communist Party of India','CPI'],
    ['Indian National Congress','INC'],
    ['Nationalist Congress Party','NCP'],
    ['Aam Aadmi Party','AAP'],
    ["National People's Party",'NPP'],
    ['Shiv Sena','SS'],
    ['Samajwadi Party','SP']
]
var PAR = parties
var symbol = [
    'stringUrl',
    'stringUrl',
    'stringUrl',
    'stringUrl',
    'stringUrl',
    'stringUrl',
    'stringUrl',
    'stringUrl',
    'stringUrl',
    'stringUrl',
    'stringUrl',
]

str = JSON.stringify(cn);
console.log(str);
str = JSON.stringify(cn, null, 4); // (Optional) beautiful indented output.
var cnt = 1;
for (var i = 0; i < 500; ) {
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
                name: parties[i % 10],

                abb: abbParties[i % 10],

                symbol: symbol[i % 10]
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