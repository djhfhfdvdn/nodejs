var express = require('express');
var router = express.Router();

// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync');
// const shortid = require('shortid');
 const jwt =require('jsonwebtoken');
// const adapter = new FileSync(__dirname + '/../data/db.json')
// const db = low(adapter)
// 导入shortid
// const shortid = require('shortid');
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');
const { token } = require('morgan');

const checktokenmidwj = require('../../midwj/checktoken');

/* GET home page. */
// 记账本列表
router.get('/account', checktokenmidwj,function(req, res, next) {

  

// 校验
  
    AccountModel.find().sort({time: -1}).exec((err,data)=>{
    if(err)
    {
      // res.status(500).send('读取失败');
      res.json({
        code : '1001',
        msg : '读取成功',
        data : data
      });
      return;
    }
    // res.render('list',{accounts:data,moment : moment});
    res.json({
      code : '0000',
      msg : '读取成功',
      data : data
    });
  

  });

  // res.render('index', { title: 'Express' });
  // let accounts = db.get('accounts').value();
  // 读取集合信息
  // AccountModel.find().sort({time: -1}).exec((err,data)=>{
  //   if(err)
  //   {
  //     // res.status(500).send('读取失败');
  //     res.json({
  //       code : '1001',
  //       msg : '读取成功',
  //       data : data
  //     });
  //     return;
  //   }
  //   // res.render('list',{accounts:data,moment : moment});
  //   res.json({
  //     code : '0000',
  //     msg : '读取成功',
  //     data : data
  //   });
  // })
  // console.log(accounts);
  
});
// 添加账本
// router.get('/account/create', function(req, res, next) {
  // res.render('index', { title: 'Express' });
//   res.render('create');
// });
// 新增记录
router.post('/account',checktokenmidwj, ( req , res )=> {
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
      // res.status(500).send('插入失败');
      res.json({
        code : '1002',
        msg : '创建失败',
        data : null
        
      });
      return;
    }
    // res.render('success',{msg: '添加成功哦',url : '/account'});
    res.json({
      code : '0000',
      msg : '创建成功',
      data :data
    });
  })
  // 成功提醒
  
});
// 删除
router.delete('/account/:id',checktokenmidwj,(req,res)=>{
  let id =req.params.id;
  // db.get('accounts').remove({id:id}).write();
  AccountModel.deleteOne({_id:id},(err,data)=>{
    if(err)
    {
      // res.status(500).send('删除失败');
      res.json({
        code : '1003',
        msg : '删除失败',
        data : null
      });
    }
      // res.render('success',{msg: ' 删除成功哦',url : '/account'});
      res.json({
        code : '0000',
        msg : '删除成功',
        data :{}
      });
  })
  // res.send('删除成功');

});


// 获取单个信息
router.get('/account/:id',checktokenmidwj,(req,res)=>{
  // 获取id参数
  let{id}=req.params;
  // 查询数据库
  AccountModel.findById(id,(err,data)=>{
    if(err)
    {
      return res.json({
        code : '1004',
        msg : '读取失败',
        data :null
      })
    }
    // 成功响应
    res.json({
      code : '0000',
      msg : '读取成功',
      data : data
    })
  })
})
// 更新单个信息
router.patch('/account/:id',checktokenmidwj,(req,res)=>{
  let{id}=req.params;
  AccountModel.updateOne({_id: id},req.body,(err,data=>{
    if(err)
    {
      return res.json({
        code : '1005',
        msg : '更新失败',
        data :null
      })
    }
    // 成功响应
    res.json({
      code : '0000',
      msg : '更新成功',
      data : data
    })
  }));
})

module.exports = router;
