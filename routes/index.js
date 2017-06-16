var express=require('express');
var router=express.Router();
var wikiRouter=require('./wiki');
var userRouter=require('./user');
router.use(function(req,res,next){
  next();
});

router.use('/wiki',wikiRouter);
//router.use('/user',userRouter);

module.exports = router;
