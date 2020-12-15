var express = require('express');
var router = express.Router();
var galleryModel= require('../models/galleryModel')

/* GET gallery page. */
router.get('/', async function(req, res, next) {
  var gallery2 = await galleryModel.getGallery2();
    res.render('gallery',{
    isGallery:true,
    gallery2,
  });
});

router.post('/', async function(req,res,next){
  var gallery2 = await galleryModel.getGallery3();
  console.log(gallery2);
    res.render('gallery',{
      isGallery:true,
      gallery2
    });
});

module.exports = router;