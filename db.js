const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://nsvy:Test4689@cluster0.5kgho.mongodb.net/MyRestro'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose