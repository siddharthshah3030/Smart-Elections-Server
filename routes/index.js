var express = require('express');
var router = express.Router();
<<<<<<< Updated upstream


// var arr = [1,2,3,4]
// for (let i of arr) {
//   console.log(i);
// }

// import react from react
=======
var drizzle =  require('drizzle');
>>>>>>> Stashed changes
/* GET home page. */
router.get('/', function(req, res, next) {
  voter.find({}, function (err, vo) {
    res.send(vo);
});
  // var ip = req.headers['x-real-ip']
  // console.log("testing ip address")
  // console.log(req.connection.remoteAddress)
  // console.log(req.ip)
  res.render('dashboard', { title: 'dashboard' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/vote', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


module.exports = router;

