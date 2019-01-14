var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



/* GET home page. */
router.get('/:name', function(req, res, next) {
    var name = req.params.name;
    region.findOne({ name: name }).exec(function (err, doc) {
        res.json( doc );
    });
});


module.exports = router;
