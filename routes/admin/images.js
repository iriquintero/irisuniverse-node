var express = require ('express');
var router = express.Router();
var galleryModel = require('../../models/galleryModel'); 

//obtener pagina gallería
router.get('/',async function(req,res,next){
  var gallery
  if(req.query.q === undefined){
    gallery = await galleryModel.getGallery();
  }else {
    gallery = await galleryModel.searchGallery(req.query.q);
  }res.render('admin/images',{
        layout:'admin/layout',
        isImages:true,
        username:req.session.name,
        gallery,
        is_search:req.query.q !== undefined,
        q: req.query.q
    });
});

//obtener página newgallery
router.get('/newimage',(req, res, next)=>{
    res.render('admin/newimage',{
      layout:'admin/layout'
    });
  });

//agregar nueva imagen
router.post('/newimage', async (req, res, next)=>{
  try{
   var obj={
     title:req.body.title,
     tags:req.body.tags
    }
    if(req.files && req.files.image != "" && req.body.title != "" && req.body.tags != ""){
       image = req.files.image.name;
       await req.files.image.mv('public/images/gallery/uploadimagen/'+ image)
       obj.image=image;
    }console.log(obj);
    await galleryModel.insertNewimage(obj);
    res.redirect('/admin/images');
  }catch(error){
    console.log(error);
    res.render('admin/newimage',{
      layout: 'admin/layout',
      error:true,
      message:'Not save the image'
    })

  }
});

//delet

router.get('/delete/:id', async (req,res,next)=>{
  var id = req.params.id;
  await galleryModel.deleteGalleryById(id);
  res.redirect('/admin/images');
});

// editar
router.get('/editimage/:id', async(req,res,next)=>{
  var id= req.params.id;
  var gallery = await galleryModel.getGalleryById(id);
  res.render('admin/editimage',{
    layout:'admin/layout',
    gallery
  });
});

router.post('/editimage', async(req, res, next)=>{
  try{
    var obj={
      title:req.body.title,
      tags:req.body.tags
    }
    if(req.files && req.files.image != ""){
      image = req.files.image.name;
      await req.files.image.mv('public/images/gallery/uploadimagen/'+image)
      obj.image=image;
    }
    console.log(obj);
    await galleryModel.editGalleryById(obj,req.body.id);
    res.redirect('/admin/images');
  }catch(error){
    res.render('admin/editimage',{
      layout:'admin/layout',
      error:true,
      message:'The modifications were not save'
    });
  };
});

module.exports = router;