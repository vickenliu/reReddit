var express = require('express');
var router = express.Router();
var db= require('../db/db')
/* GET home page. */
router.post('/', function(req, res, next) {
  db.addOne('posts',req.body).then(function(){
    res.send('ok')
  })
});

router.delete('/:id', function(req, res, next) {
  db.deleteItem('posts',req.params.id).then(function(){
    res.json('confirmed')
  })
});

router.put('/:id', function(req, res, next) {
  db.updateItem('posts',req.params.id,req.body).then(function(){
    res.json('confirmed')
  })
});
module.exports = router;
