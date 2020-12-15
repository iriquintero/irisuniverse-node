var express = require ('express');
var router = express.Router();
const usuarioModel = require('./../../models/usuarioModel');

/* GET login page. */
router.get('/',function(req,res,next){
    res.render('admin/login',{
        layout:'admin/layout'
    });
});

router.get('/logout',function (req,res,next){
    req.session.destroy();
    res.render('admin/login',{
        layout:'admin/layout'
    });
});

/*POST username*/
router.post('/', async(req,res,next)=>{
    try{
        var username= req.body.username;
        var password= req.body.password;

        var data = await usuarioModel.getLoginUsername(username,password);

        if (data != undefined){

            req.session.id_username = data.id;
            req.session.name = data.username;

            res.redirect('/admin/blog');
        }else{
            res.render('admin/login',{
                layout:'admin/layout',
                error:true
            });
        }    
    } catch(error){
            console.log(error);
    }
});

module.exports = router;

