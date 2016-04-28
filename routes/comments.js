var express = require('express');
var router = express.Router();
var db= require('../db/db')
/* GET home page. */
router.post('/', function(req, res, next) {
  db.addOne('comments',req.body).then(function(){
    res.json('confirmed')
  })
});

module.exports = router;
