const fs = require('fs')

fs.unlink('del.txt',(err)=>{
    if(err) console.log('err deleting file');
    else console.log('file delete successfully');  
})