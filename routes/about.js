var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer')
const pool = require('../models/bd');
var contactModel = require('../models/contactModel');
var newsletterModel = require('../models/newslatterModel');

/* GET  about page. */
router.get('/', function(req, res, next) {
  res.render('about',{
    isAbout:true
  });
});

/*send message and save contact */ 
router.post('/form-contact', async(req,res,next)=>{
  var name=req.body.yourname;
  var email=req.body.email;
  var phone=req.body.yourphone;
  var message=req.body.yourmessage;

  var obj= {
    to:'irisuniverse1@gmail.com',
    subject:'Web contact',
    html: name + ', envio un mensaje por la web de Iri´s Universe diciendo: '+ message + '. Contactarse a través de su teléfono: ' + phone + ' o de su e-mail ' + email
  }
  var transport = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  await contactModel.insertContact({
    name,
    email,
    phone,
    message
  });
  var info = await transport.sendMail(obj);

  res.render('about',{
    mensaje:'Message sent'
  });
});
/*save email in tabla*/
router.post('/form-newsletter', async(req, res, next)=>{
  var mail=req.body.emailnewsletter;
  await newsletterModel.insertnewsletter({mail});
  res.render('about',{
    mensaje2:'Message sent',
  });
});

module.exports = router;