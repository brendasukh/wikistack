var express=require('express');
var router=express.Router();
var path=require('path');
// router.use('/wiki',function(req,res,next){
//   next()
// });

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res) {
  res.render('../../views/addpage');
  //res.send('got to ADD!')
  //res.send('got to POST /wiki/');
});

module.exports=router;
