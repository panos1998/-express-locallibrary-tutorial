var express = require('express');
var router = express.Router();
var assert=require('assert');


/* GET home page. */
router.get('/',function(req,res){
  res.redirect('/catalog');
});

module.exports = router;
