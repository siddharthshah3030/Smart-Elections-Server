var express = require('express');
var router = express.Router();

var session = 1;
// var user_name ;
var userid = "5c4244d5b1a3cc0e3c904cec";

router.post('/',function(req,res){
    var tempBody = {
        userid : "5c4244d5b1a3cc0e3c904cec"
    }
    // console.log(req.body);
    var button = req.body.party_id;
    
// str = JSON.stringify(req.body, null, 4); // (Optional) beautiful indented output.
// console.log("in post of button ")
// console.log(str); // Logs output to dev tools console.
    // var user_name=req.body.user;
    //  user_name=req.tempBody.userid;
    // var password=req.body.password;
    // console.log("User name = "+user_name+", password is ");
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
        // console.log("sending voter data before")
        var userid = "5c4244d5b1a3cc0e3c904ce8";

        voter.findById(userid, function (err, voter) {
            campaign.findOne({ name: voter.region }, function (err, location) {
                var str = "";
                var int = 1;
                location.candidates.map(e=>{

                    console.log(e.party.abb)
                    str = str + int+"-"
                    str = str + e.party.abb
                    str = str + " "

                    int++;
                })
            console.log("button resses" )

            res.send("button pressed");
        });
            // console.log(voter.region)
            // console.log("iuchniu")
        });
        // voter.findOne({ id: 'ERMOxqvujy' }, function (err, adventure) {
        //     console.log("sending voter data find one ")

        // });



    }
});


module.exports = router;

