// common js
// const express = require('express');

// module
import express from 'express';

const app = express();  // call express

app.use(express.json())  // middleware -> convert (json data) into redable object

app.get('/', (req, res) => { // url, callback fxn
    res.send('Hello World hi!');
});

app.get('/about',(req,res)=>{
    res.send("about->Js")
})

app.post('/user-data', (req,res)=>{
    res.send({
        "message":`Hey ${req.body.name}, your data saved sucessfull`
    })
    console.log(req.body);
    
})
app.listen(5000,()=>{
    console.log("server running");
    
})
