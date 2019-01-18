var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/up')
  .post(
    setConnectionTimeout('12h'),
    require('./actions/upload-files').responseHandler
  );

function setConnectionTimeout(time) {
  var delay = typeof time === 'string'
    ? ms(time)
    : Number(time || 5000);

  return function (req, res, next) {
    res.connection.setTimeout(delay);
    next();
  }
}




router.get('/', function(req, res, next) {
    res.send('respond with a voting data');
});


module.exports = router;

