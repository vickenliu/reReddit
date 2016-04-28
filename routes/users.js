var express = require('express');
var router = express.Router();
var db= require('../db/db')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a users');
});

module.exports = router;
