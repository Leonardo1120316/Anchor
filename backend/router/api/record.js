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
router.post('/addrecord', async (req, res) => {
    await models.record.findOne({ where: { [Op.and]:{record_name: req.body.record_name} } }).then(async(item)=>{
        if(item){
            return res.status(400).json({ msg: "考试名称重复" })
        }else{
            const newRecord = models.record.build({
                record_name: req.body.record_name,
                score: req.body.score,
                student_class: req.body.student_class,
                student_id: req.body.student_id,
                student_name: req.body.student_name,
                subject: req.body.subject,
                teacher_id: req.body.teacher_id
            })
            await newRecord.save().then((result)=>{
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
router.get('/deleterecord', async (req, res) => {
    models.record.findOne({where: {id: req.query.id}}).then((item)=>{
        models.user.update({class: ''},{ where: { class: item.class_name } })
        models.record.destroy({ where: { id: req.query.id } }).then(async record => {
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
router.post('/updaterecord', async (req, res) => {
    models.record.findOne({where: { class_name: req.body.newVal }}).then(item=>{
        if(item){
            return res.status(400).json({ msg: "班级名称重复" })
        }else{
            models.record.update({class_name: req.body.newVal},{ where: { class_name: req.body.oldVal } }).then(async item => {
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
router.get('/getrecord', async (req,res) => {
    models.record.findAll().then(list => {
        return res.status(200).json({data: list})   
    }).catch((err)=>{
        return res.status(400).json({msg: "getClass failed"})   
    })
})

module.exports = router;