var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



/* GET home page. */
router.get('/:name', function(req, res, next) {
    var name = req.params.name;
    // console.log(name)
    region.findOne({ name: name }).exec(function (err, doc) {


        
        
        
        // str = JSON.stringify(doc);
        // str = JSON.stringify(doc, null, 4); // (Optional) beautiful indented output.
        // console.log(str);  
        res.render('index', { title: doc });
        // console.log("in location here");  
        // id = '5c3bdd9386bad829eea774db'
        // region.findOne({ name: name }).exec(function (err, he) {

        //     str = JSON.stringify(he);
        //     str = JSON.stringify(he, null, 4); // (Optional) beautiful indented output.
        //     console.log(str);        });
    // });


    });

    // };
    // promise(function (err, docs) {


    // });

});


module.exports = router;
