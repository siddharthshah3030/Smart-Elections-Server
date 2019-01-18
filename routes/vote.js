var express = require('express');
var router = express.Router();

var session = 0;




router.get('/', function(req, res, next) {
    if(session==0){
        res.send('0');
    }
    else{
        res.send('1');

    }
});


module.exports = router;

