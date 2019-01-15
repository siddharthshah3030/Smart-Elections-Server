var mongoose = require('mongoose');
var cn = require('./constantNames');
var db = require('./schema/location');
var faker = require('faker')
faker.locale = "en_IND";


var abbParties = ['BJP', 'AITC', 'BSP', 'CPI', 'INC', 'NCP', 'AAP', 'NPP', 'SS', 'SP'];
var parties = [
    'Bharatiya Janata Party',
    'All India Trinamool Congress',
    'Bahujan Samaj Party',
    'Communist Party of India',
    'Indian National Congress',
    'Nationalist Congress Party',
    'Aam Aadmi Party',
    "National People's Party",
    'Shiv Sena',
    'Samajwadi Party'
]
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
for (var i = 0; i < 501; i++) {
    var location = new campaign({
        name: "location" + (cnt)
    })
    cnt++;
    while (1) {

        candi = {
            name: "candidate_" + i,
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