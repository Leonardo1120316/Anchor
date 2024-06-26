const express = require("express");
const router = express.Router();
const initModels = require("../../module/init-models");
const sequelize = require('../../config/mysql')
const models = initModels(sequelize);
const { Op } = require('sequelize');


/* 
增加接口
GET

参数
新的

 */
router.post('/addmessage', async (req, res) => {
    const newMessage = models.message.build({
        sender_id: req.body.sender_id,
        reciever_id: req.body.reciever_id,
        reciever_name: req.body.reciever_name,
        content: req.body.content,
    })
    await newMessage.save().then((result)=>{
        return res.status(200).json({ msg: "消息添加成功" })
    }).catch(err=>{
        return res.status(400).json({ msg: "消息添加失败" })
    })
})

/* 
删除接口
GET

参数
id 被删除的用户id

 */
router.get('/deletemessage', async (req, res) => {
    models.message.findOne({where: {id: req.query.id}}).then((item)=>{
        models.message.destroy({ where: { id: req.query.id } }).then(async record => {
            if (!record) {
                return res.status(400).json({ msg: "no class" })
            } else {
                return res.status(200).json({ msg: "class delete" })
            }
        }).catch((error) => {
            return res.status(400).json({ error: error })
        })
    })
})

/* 
更新接口
POST

参数
req 见库表
id 被修改的用户id

 */
router.post('/updatemessage', async (req, res) => {
    models.message.findOne({where: { class_name: req.body.newVal }}).then(item=>{
        if(item){
            return res.status(400).json({ msg: "班级名称重复" })
        }else{
            models.message.update({class_name: req.body.newVal},{ where: { class_name: req.body.oldVal } }).then(async item => {
                models.user.update({class: req.body.newVal},{ where: { class: req.body.oldVal } })
                return res.status(200).json({msg:'success'})
            }).catch((error) => {
                return res.status(400).json({ error: error })
            })
        }
    })
})

/* 
查找所有
GET

参数

返回值
data 所有用户的数据

 */
router.get('/getmessage', async (req,res) => {
    models.message.findAll().then(list => {
        return res.status(200).json({data: list})   
    }).catch((err)=>{
        return res.status(400).json({msg: "getClass failed"})   
    })
})

module.exports = router;