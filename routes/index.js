var express = require('express');
var router = express.Router();

var arr = [1,2,3,4]
for (let i of arr) {
  console.log(i);
}

// import react from react
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'dashboard' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/vote', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


module.exports = router;

