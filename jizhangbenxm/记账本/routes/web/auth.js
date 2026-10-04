var express = require('express');
var router = express.Router();

const UserModel= require('../../models/Usermodel')



router.get('/reg',(req,res)=>{
    res.render('auth/reg');
});

router.post('/reg',(req,res)=>{
    // console.log(req.body);
    // res.send('测试');
    UserModel.create(req.body,(err,data)=>{
        if(err){
            res.status(500).send('注册失败，请稍后再试');
            return
        }
        res.render('success',{msg:' 注册成功',url:'/login'});
    });
});

router.get('/login',(req,res)=>{
    res.render('auth/login');
});

router.post('/login',(req,res)=>{
    let {username,password} = req.body;

    UserModel.findOne({username:username,password:password},(err,data) =>{
            if(err){
            res.status(500).send('登录失败，请稍后再试');
            return
        }
        // console.log(data);
        // res.send('cs');
        if(!data)
        {
            return res.send('账号或密码错误');
        }
        req.session.username =data.username;
        req.session._id = data._id;

        res.render('success', {msg : '登录成功' , url: '/account'})
    });


    // res.render('auth/login');
});

router.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.render('success' ,{msg :'退出成功', url: '/login'});
    })
});

module.exports = router;