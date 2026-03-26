const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err){
            res.writeHead(500);
            res.end("Error loading file");
        }else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(9000,()=>{
    console.log("server started");
})