//  to add content on file

const fs = require('fs')

const updateData = "Hello everyOne \n I am abhishek from bhadohi UP"

fs.appendFile('abc.txt', updateData, (err)=>{
    if(err) console.log(err);
    console.log(("Data Saves in file abc.txt"));
})