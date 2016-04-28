var express = require('express');
var router = express.Router();
var db= require('../db/db')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('from posts');
});

module.exports = router;
