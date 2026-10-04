const fs = require('fs');
fs.readFile('./wenjian.txt',(err,data)=>{
    if(err)
    {
        console.log('shibai');
        return;
    }
    console.log(data.toString());
});
