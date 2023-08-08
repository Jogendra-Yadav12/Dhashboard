// import express
const express = require('express')
const cors = require('cors')

// import config file database connect
require('./db/config');
const User = require('./db/User.js')
const Product =require('./db/Product.js')

const app = express()

// port assign
const PORT = process.env.PORT || 8080


app.use(express.json())
app.use(cors());


app.post("/register",async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})


app.post("/login",async (req,res)=>{
    if(req.body.email && req.body.password){
    let user = await User.findOne(req.body).select("-password");
    {user?res.send(user):res.send({result:'User Not found'})}
    }else{
        res.send({result:'User Not found'})
    }
})


app.post("/add-product",async(req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})


app.get('/products',async (req,res)=>{
    let products = await Product.find();
    if(products.length>0){
        res.send(products)
    }else{
        res.send({result:"Product list empty"})
    }
})

app.delete('/product/:id',async(req,res)=>{
    let result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
})


app.get('/product/:id', async(req,res)=>{
    let result = await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }else{
        res.send({result:'Product not in a list'})
    }
})

app.put('/product/:id', async(req,res)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
        res.send(result)
})

app.get('/',(req,res)=>{
    res.send('Welcome to the Backend Sever')
})


app.listen(PORT,()=>{
    console.log(`Server running on the port http://localhost:${PORT}`);
})
