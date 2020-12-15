var express = require('express');
const pool = require('../models/bd');
const blogModel = require('../models/blogModel');
var router = express.Router();
var newsletterModel = require('../models/newslatterModel');

/* GET blog page. */
router.get('/', async function(req, res, next) {
    var blog3 = await blogModel.getBlog3();
    var blog
    if (req.query.q===undefined) {
      var blog = await blogModel.getBlog2();
    }else{
       blog = await blogModel.searchBlog(req.query.q);
    }
  res.render('blog',{
    isBlog:true,
    is_search:req.query.q !== undefined,
    q:req.query.q,
    blog,
    blog3
  });
});

 /* select from recent posts*/ 
router.get('/select/:id', async(req, res,next)=>{
  var blog3 = await blogModel.getBlog3();
  var blog
  var id=req.params.id;
  if(req.params.id === undefined){
    var blog = await blogModel.getBlog2();
  }else{
    blog = await pool.query("select id,title,body,image,date_format(date,'%d,%M,%Y')as date from blog where id = ?",[id]);
  }
  res.render('blog',{
    blog,
    blog3
  });
});

/*save email in tabla*/
router.post('/form-newsletter', async(req, res, next)=>{
  var blog = await blogModel.getBlog2();
  var blog3 = await blogModel.getBlog3();
  var mail=req.body.emailnewsletter;
  await newsletterModel.insertnewsletter({mail});
  res.render('blog',{
    mensaje3:'Message sent',
    blog,
    blog3
  });
});





module.exports = router;