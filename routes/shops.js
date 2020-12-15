var express = require('express');
var router = express.Router();

/* GET shops page. */
router.get('/', function(req, res, next) {
  res.render('shops',{
    isShops:true
  });
});

module.exports = router;