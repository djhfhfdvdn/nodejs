
const db = require('./db/db');
const mongoose = require('mongoose');
const BookModel = require('./models/BookModel');
db(()=>{
    // console.log('连接成功');
        

    BookModel.create({
        name :'xiyou',
        author :'wu',
        price : 10,
    },(err,data)=>{
        if(err)
        {
            console.log('shibai');
            return;
        }
        console.log(data);
        mongoose.disconnect();
    });
    
},()=>{
    console.log('连接失败');
});



    // console.log('连接成功');

