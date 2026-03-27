// read file data

const fs = require('fs')

// readFile method perform async operation
// readFile('fileName',callback fxn(err,data))

// fs.readFile('package.json',(err,data)=>{
//     if(err) console.log(err);
//     else{
//         console.log(data.toString());   
//         // data we get in buffer format
//     }
    
// })

fs.readFile('./txtFolder/abc.txt',(err,data)=>{
    if(err) console.log(err);
    else console.log(data.toString());
})