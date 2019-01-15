
var faker = require('faker')

var mongoose = require('mongoose');
var db = require('./schema/voter');

var abbParties = ['BJP','AITC','BSP','CPI','INC', 'NCP','AAP','NPP','SS','SP'];
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


faker.locale = "en_IND";

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 256; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makeid());

for(var i=111;i<10200;i++){
    var cnt = i%100;
    if(i==0){ cntx = 100;}
    faker.seed(i);
    var user = new voter( {  
         region:    "location"+(cnt) ,
         name : faker.name.findName(),
         title : faker.name.suffix(),
         email : faker.internet.email(),
         password : faker.internet.password(),
         image : faker.image.imageUrl(),
         zipcode : faker.address.zipCode(),
         city : faker.address.city(),
         state: faker.address.state(),
         streetaddress : faker.address.streetAddress(),
         voted: 0,
         votedTo: null,
         identity : makeid()
})

        console.log(user)
    user.save(function (err) {
      if (err) return handleError(err);
      // saved!
      console.log("error in seeding voter")
    });
}


