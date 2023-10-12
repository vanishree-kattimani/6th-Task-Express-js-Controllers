const path=require('path')
const express=require('express')


const route=express.Router();



const shopController=require('../controller/product');

route.get('/',shopController.homePage)

module.exports=route;