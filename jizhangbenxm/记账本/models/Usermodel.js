const mongoose = require('mongoose');

let UsersSchema = new mongoose.Schema({
        // item :{
        //     type : String,
        //     required : true
        // },
        // time : Date,
        // type : {
        //     type : Number,
        //     default : -1
        // },
        // Users :
        // {
        //     type : Number,
        //     required : true
        // },
        // desc : {
        //     type :String
        // }
        username: String,
        password: String
    });
    let UsersModel = mongoose.model('users', UsersSchema);
    module.exports = UsersModel;