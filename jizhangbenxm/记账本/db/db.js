module.exports = function(success,error){

// if(typeof error !== 'function')
// {
//     console.log('连接失败');
// }

const mongoose = require('mongoose');
const {DBHOST,DBPORT,DBNAME} = require('../config/config.js');

mongoose.set('strictQuery' , true);
// mongoose.set('strictQuery',true);
mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

mongoose.connection.once('open',()=>{
    success();
});


mongoose.connection.once('error',()=>{
    // console.log('连接失败');
    error();
});

mongoose.connection.once('close',()=>{
    console.log('关闭连接');
});
}