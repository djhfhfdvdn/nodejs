const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open',()=>{
    console.log('连接成功');
});

mongoose.connection.once('error',()=>{
    console.log('连接失败');
});

mongoose.connection.once('close',()=>{
    console.log('关闭连接');
});

setTimeout(()=>{
    mongoose.disconnect();
},2000);