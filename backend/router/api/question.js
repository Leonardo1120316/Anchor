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
router.post('/addquestion', async (req, res) => {
            const newQuestion = models.question.build({
                question_introduce: req.body.question_introduce,
                question_name: req.body.question_name,
                student_name: req.body.student_name
            })
            await newQuestion.save().then((result)=>{
                return res.status(200).json({ msg: "计划添加成功" })
            }).catch(err=>{
                return res.status(400).json({ msg: "计划添加失败" })
            })
})

/* 
删除接口
GET

参数
id 被删除的用户id

 */
router.get('/deletequestion', async (req, res) => {
    models.question.findOne({where: {id: req.query.id}}).then((item)=>{
        models.question.destroy({ where: { id: req.query.id } }).then(async record => {
            if (!record) {
                return res.status(400).json({ msg: "no question" })
            } else {
                 
                return res.status(200).json({ msg: "question delete" })
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
router.post('/updatequestion', async (req, res) => {
            models.question.update(req.body,{ where: { id: req.body.id } }).then(async item => {
                return res.status(200).json({msg:'success'})
            }).catch((error) => {
                return res.status(400).json({ error: error })
            })
})

/* 
查找所有
GET

参数

返回值
data 所有用户的数据

 */
router.get('/getquestion', async (req,res) => {
    models.question.findAll().then(list => {
        return res.status(200).json({data: list})   
    }).catch((err)=>{
        return res.status(400).json({msg: "getClass failed"})   
    })
})

module.exports = router;