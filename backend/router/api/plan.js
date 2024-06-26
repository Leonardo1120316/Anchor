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
router.post('/addplan', async (req, res) => {
            const newPlan = models.plan.build({
                plan_introduce: req.body.plan_introduce,
                plan_name: req.body.plan_name,
                student_name: req.body.student_name
            })
            await newPlan.save().then((result)=>{
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
router.get('/deleteplan', async (req, res) => {
    models.plan.findOne({where: {id: req.query.id}}).then((item)=>{
        models.plan.destroy({ where: { id: req.query.id } }).then(async record => {
            if (!record) {
                return res.status(400).json({ msg: "no plan" })
            } else {
                 
                return res.status(200).json({ msg: "plan delete" })
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
router.post('/updateplan', async (req, res) => {
            models.plan.update(req.body,{ where: { id: req.body.id } }).then(async item => {
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
router.get('/getplan', async (req,res) => {
    models.plan.findAll().then(list => {
        return res.status(200).json({data: list})   
    }).catch((err)=>{
        return res.status(400).json({msg: "getClass failed"})   
    })
})

module.exports = router;