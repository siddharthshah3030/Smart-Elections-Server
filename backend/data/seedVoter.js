
var faker = require('faker')

var mongoose = require('mongoose');
var db = require('./schema/voter');

faker.locale = "en_IND";

for(var i=111;i<10000;i++){
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
})

        console.log(user)
    user.save(function (err) {
      if (err) return handleError(err);
      // saved!
      console.log("error in seeding voter")
    });
}
