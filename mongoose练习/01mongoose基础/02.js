const mongoose = require('mongoose');

// mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open',()=>{
    // console.log('连接成功');
    let BookSchema = new mongoose.Schema({
        name : String,
        author : String,
        price : Number,
    });
    let BookModel = mongoose.model('books', BookSchema);

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
});

mongoose.connection.once('error',()=>{
    console.log('连接失败');
});

mongoose.connection.once('close',()=>{
    console.log('关闭连接');
});