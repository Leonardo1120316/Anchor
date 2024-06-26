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
router.post('/addclass', async (req, res) => {
    await models.class_.findOne({ where: { [Op.and]:{class_name: req.body.class_name} } }).then(async(item)=>{
        if(item){
            return res.status(400).json({ msg: "班级或教师重复" })
        }else{
            const newClass = models.class_.build({
                class_name: req.body.class_name,
            })
            await newClass.save().then((result)=>{
                return res.status(200).json({ msg: "班级添加成功" })
            }).catch(err=>{
                return res.status(400).json({ msg: "班级添加失败" })
            })
        }
    })
})

/* 
删除接口
GET

参数
id 被删除的用户id

 */
router.get('/deleteclass', async (req, res) => {
    models.class_.findOne({where: {id: req.query.id}}).then((item)=>{
        models.user.update({class: ''},{ where: { class: item.class_name } })
        models.class_.destroy({ where: { id: req.query.id } }).then(async record => {
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
router.post('/updateclass', async (req, res) => {
    models.class_.findOne({where: { class_name: req.body.newVal }}).then(item=>{
        if(item){
            return res.status(400).json({ msg: "班级名称重复" })
        }else{
            models.class_.update({class_name: req.body.newVal},{ where: { class_name: req.body.oldVal } }).then(async item => {
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
router.get('/getclass', async (req,res) => {
    models.class_.findAll().then(list => {
        return res.status(200).json({data: list})   
    }).catch((err)=>{
        return res.status(400).json({msg: "getClass failed"})   
    })
})

module.exports = router;