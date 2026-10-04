const express = require('express');
const app = express();
app.get('/home',(req,res)=>{
    res.end('hello express');
});
app.listen(9000,()=>{
    console.log('yiqidong');
});