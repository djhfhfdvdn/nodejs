var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
// const shortid = require('shortid');
 
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)
// 导入shortid
const shortid = require('shortid');

/* GET home page. */
// 记账本列表
router.get('/account', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  let accounts = db.get('accounts').value();
  // console.log(accounts);
  res.render('list',{accounts:accounts});
});
// 添加账本
router.get('/account/create', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('create');
});
// 新增记录
router.post('/account',(req,res)=>{
  // 生成id
  let id = shortid.generate();
  // 写入文件
  db.get('accounts').unshift({id:id, ...req.body}).write();
  // res.send('添加记录');
  // 成功提醒
  res.render('success',{msg: '添加成功哦',url : '/account'});
});
// 删除
router.get('/account/:id',(req,res)=>{
  let id =req.params.id;
  db.get('accounts').remove({id:id}).write();
  // res.send('删除成功');
  res.render('success',{msg: ' 删除成功哦',url : '/account'});
});
module.exports = router;
