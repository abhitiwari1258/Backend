const fs = require('fs')

// var text = "I have a knowledge of frontend backend and database i know the git and github use isomnia and postman for API testing. "

// fs.writeFile('abc.txt',text,(err)=>{
//     if(err) console.log(`Err occurred ${err}`);
//     else console.log("File writtten successfully");  
// })


// read abc.txt and tranfer abc file data to '/txtFolder/abc.txt'

fs.readFile('abc.txt',(err,data)=>{
    if(err) console.log(`Err occurred ${err}`);
    else{
        const writeData = data.toString()

        fs.writeFile('./txtFolder/abc.txt', writeData,(err)=>{
            if(err) console.log(`err occur writing file ${err}`);
            else console.log("Data Transfer Success");
        })
    }
})


