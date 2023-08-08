const mongoose = require('mongoose')

url = "mongodb+srv://user:741852963@cluster0.mfp5npk.mongodb.net/e-commerce"
mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })