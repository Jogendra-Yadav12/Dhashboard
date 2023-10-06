// import express,cors,Route file
const express = require('express')
const cors = require('cors')
const route = require('./Routers/Routes.js')

// import config file database connect
require('./db/config');

const app = express()

// port assign
const PORT = process.env.PORT || 8080

// cors is used because is give clearity to understand url
app.use(express.json())
app.use(cors());

// Using the Routes
app.use('/',route);


app.listen(PORT,()=>{
    console.log(`Server running on the port http://localhost:${PORT}`);
})
