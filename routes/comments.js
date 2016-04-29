var express = require('express');
var router = express.Router();
var db= require('../db/db')
/* create a new post. */
router.post('/', function(req, res, next) {
  db.addOne('comments',req.body).then(function(){
    res.json('confirmed')
  })
});

router.delete('/:id', function(req, res, next) {
  db.deleteItem('comments',req.params.id).then(function(){
    res.json('confirmed')
  })
});

module.exports = router;
