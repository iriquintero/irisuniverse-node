var express = require('express');
var router = express.Router();
const blogModel = require('../models/blogModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var blog2 = await blogModel.getBlog2();
  res.render('index',{
    isHome:true,
    blog2
  });
});

module.exports = router;
