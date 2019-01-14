var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {

    var query = region.find({ name: name });
    var promise = query.exec();
    promise.addBack(function (err, docs) {


        res.render('index', { title: 'region data is here' });
    });

});


module.exports = router;
