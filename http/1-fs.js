const fs = require('fs');
fs.writeFile('./座右铭.txt','谁能忍心',err =>{
    if(err)
    {
        console.log('shibai');
    }
    console.log('chenggong');
});