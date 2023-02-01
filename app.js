const express=require('express')
const bodyParser=require('body-parser')
const app=express();

app.use(bodyParser.json());
const mongoConnect = require('./util/database').mongoConnect;


app.get("/msg",(req,res,next)=>{
    res.send({data:"this is my own route"})
    console.log('hello')
})


mongoConnect(()=>{
    app.listen(8000)
})
