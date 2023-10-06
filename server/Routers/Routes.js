const express = require('express')
const router = express.Router();

// import Schema file of User & Product files
const User = require('../db/User')
const Product =require('../db/Product')


// Registration API
router.post("/register",async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

// Login API
router.post("/login",async (req,res)=>{
    if(req.body.email && req.body.password){
    let user = await User.findOne(req.body).select("-password");
    {user?res.send(user):res.send({result:'User Not found'})}
    }else{
        res.send({result:'User Not found'})
    }
})

// Adding Product API

router.post("/add-product",async(req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})

// Get the Product API

router.get('/products',async (req,res)=>{
    let products = await Product.find();
    if(products.length>0){
        res.send(products)
    }else{
        res.send({result:"Product list empty"})
    }
})

// Delete Product with the help of id API

router.delete('/product/:id',async(req,res)=>{
    let result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
})

// Get data for update

router.get('/product/:id', async(req,res)=>{
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }else{
        res.send({result:'Product not in a list'})
    }
})

// Update the data API

router.put('/product/:id', async(req,res)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
        res.send(result)
})

// Searching Product API

router.get('/search/:key', async(req,res)=>{
    let result = await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}}
        ]
    });
    res.send(result)
})

// Server Checking API

router.get('/',(req,res)=>{
    res.send('Welcome to the Backend Sever')
})

module.exports = router