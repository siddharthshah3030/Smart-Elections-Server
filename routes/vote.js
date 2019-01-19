var express = require('express');
var router = express.Router();

var session = 1;
var user_name;

router.post('/',function(req,res){
    var tempBody = {
        userid : "12345"

    }
    // var user_name=req.body.user;
     user_name=req.tempBody.userid;
    // var password=req.body.password;
    console.log("User name = "+user_name+", password is ");
    session = 1;
    setTimeout(function() {
        session = 0;

        console.log("time out function ")
        //your code to be executed after 1 second
      }, 10000);
    // console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
  });


router.get('/', function(req, res, next) {
    if(session==0){
        res.send('0');
    }
    else{
        console.log("sending voter data before")

        voters.findById(userid, function (err, voter) {
            console.log("sending voter data")
            res.send('sajdfhifdhgsdifhncdsfjcawcigh');
        });



    }
});


module.exports = router;

