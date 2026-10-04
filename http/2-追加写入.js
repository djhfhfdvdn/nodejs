const fs = require('fs');
fs.appendFile('./座右铭.txt','谁能忍心',err =>{
    if(err)
    {
        console.log('shibai');
    }
    console.log('chenggong');
});