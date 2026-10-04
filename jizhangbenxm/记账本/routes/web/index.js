var express = require('express');
var router = express.Router();
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync');
// const shortid = require('shortid');
 
// const adapter = new FileSync(__dirname + '/../data/db.json')
// const db = low(adapter)
// 导入shortid
// const shortid = require('shortid');
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');


let checklogin =require('../../midwj/checkliginwj')
/* GET home page. */
// 记账本列表
router.get('/account', checklogin,function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // let accounts = db.get('accounts').value();
  // 读取集合信息
  AccountModel.find().sort({time: -1}).exec((err,data)=>{
    if(err)
    {
      res.status(500).send('读取失败');
      return;
    }
    res.render('list',{accounts:data,moment : moment});
  })
  // console.log(accounts);
  
});

router.get('/',(req,res)=>{
  res.redirect('/account');
})


// 添加账本
router.get('/account/create', checklogin,function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('create');
});
// 新增记录
router.post('/account', checklogin,( req , res )=> {
  // 生成id
  // let id = shortid.generate();
  // 写入文件
  // db.get('accounts').unshift({id:id, ...req.body}).write();
  // res.send('添加记录');
  AccountModel.create({
      ...req.body,
      time : moment(req.body.time).toDate()
  },(err,data)=>{
    if(err)
    {
      res.status(500).send('插入失败');
      return;
    }
    res.render('success',{msg: '添加成功哦',url : '/account'});
  })
  // 成功提醒
  
});
// 删除
router.get('/account/:id',checklogin,(req,res)=>{
  let id =req.params.id;
  // db.get('accounts').remove({id:id}).write();
  AccountModel.deleteOne({_id:id},(err,data)=>{
    if(err)
    {
      res.status(500).send('删除失败');
    }
      res.render('success',{msg: ' 删除成功哦',url : '/account'});
  })
  // res.send('删除成功');

});
module.exports = router;
