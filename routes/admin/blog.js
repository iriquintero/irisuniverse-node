var express = require('express');
var router = express.Router();
var blogModel = require('../../models/blogModel');
var pool = require('../../models/bd');

//obtener pagina blog
router.get('/', async function (req, res, next) {
  var blog
  if (req.query.q === undefined) {
    blog = await blogModel.getBlog();
  } else {
    blog = await blogModel.searchBlog(req.query.q);
  } res.render('admin/blog', {
    layout:'admin/layout',
    username:req.session.name,
    blog,
    is_search:req.query.q !== undefined,
    q: req.query.q
  });
});
//obtner pagina newpost
router.get('/newpost', (req, res, next) => {
  res.render('admin/newpost', {
    layout: 'admin/layout'
  });
});
// //para agregar nuevo post 
router.post('/newpost', async (req, res, next) => {

  try {
    var title = req.body.title;
    var date = req.body.date;
    var file = req.files.image;
    var body = req.body.body;
    var img = file.name;

    if (req.body.title != "" && req.body.date != "" && req.body.body != "" && req.files.image != "") {
      //guardar imagen en el servidor       
      file.mv('public/images/uploadimages/' + file.name, function (err) {
        if (err)
          return res.status(500).send(err);
      });
      //insertar datos a la tabla blog
      query = "insert into blog values ('"+[0]+ "','"+date+"','"+img+"','"+title+"','"+body+"')";
      await pool.query(query);
      res.redirect('/admin/blog');
    } else {
      res.render('admin/newpost', {
        layout: 'admin/layout',
        error: true,
        message: 'All fields are required'
      });
    }
  } catch (error) {
    console.log(error);
    res.render('admin/newpost', {
      layout: 'admin/layout',
      error: true,
      message: 'Not save the post'
    });
  };
});

//borrar 
router.get('/delete/:id', async (req, res, next) => {
  var id = req.params.id;
  await blogModel.deleteBlogById(id);
  res.redirect('/admin/blog')
});

//para dirigir a la pagina donde se va a editar
router.get('/edit/:id', async(req,res,next)=>{
  var id = req.params.id;
  var blog = await blogModel.getBlogById2(id);
  res.render('admin/edit',{
    layout:'admin/layout',
    blog
  });
});

//actualizar los datos editados
router.post('/edit',async(req,res,next)=>{
  try {
    var obj={
      title:req.body.title,
      date:req.body.date,
      body:req.body.body,
    }
    if (req.files && req.files.image != ""){
      image = req.files.image.name;
      await req.files.image.mv('public/images/uploadimages/' + image)
      obj.image = image;
    }
    console.log(obj);
    await blogModel.editBlogById(obj, req.body.id);
    res.redirect('/admin/blog');
  }catch(error){
    console.log(error);
    res.render('admin/edit', {
      layout: 'admin/layout',
      error: true,
      message: 'The modifications were not saved'
    });
  };
});

module.exports = router;

