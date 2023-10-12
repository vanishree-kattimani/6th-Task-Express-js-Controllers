const path = require('path')

const express=require('express')


const route=express.Router();


const adminController=require('../controller/product')

route.get('/addproduct',adminController.getProduct);
route.post('/addproduct',adminController.postProduct);

//route.post('/addproduct',adminController.postaddproduct);


module.exports=route;