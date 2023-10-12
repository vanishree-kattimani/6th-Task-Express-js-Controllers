

//const rootDir=require('../utils/path');

const path=require('path');


//const Product=require('../model/product');

exports.getProduct=(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
     
     };

exports.postProduct=(req,res,next)=>{
    console.log('Form-Data:' ,req.body);
    const product=new Product(req.body.title,req.body.size);
    product.save();

   
  res.redirect('/');
}   

exports.homePage=(req,res,next)=>{
// Product.fetchAll(product=>{
        res.sendFile(path.join(__dirname,'../','views','shop.html'))
   // }); 
   
};


 exports.getContactus=(req,res,next)=>{

    res.sendFile(path.join(__dirname ,'../','views','contact.html'))
     
    }

   /* exports.postaddproduct=(req,res,next)=>{
      console.log('Form-Data:' ,req.body);
     
     res.send('<h1>Product Submitted!</h1>')
};*/




 exports.postContactus=(req,res,next)=>{
    console.log('Form-Data:' ,req.body);
   
   res.send('<h1>ThankYou!! Details Submitted successfully!</h1>')
};
