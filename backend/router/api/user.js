const express = require("express");
const router = express.Router();
const initModels = require("../../module/init-models");
const sequelize = require('../../config/mysql')
const models = initModels(sequelize);
const bcrypt = require('bcrypt')

/* 
登录接口
POST

参数
userAccount 用户账号
userPassword  用户密码

返回值
id  登录用户id
role 登录用户的角色

 */
router.post("/login", async (req, res) => {
    await models.user.findOne({ where: { userAccount: req.body.userAccount } }).then(async user => {
        if (user) {
            bcrypt.compare(req.body.userPassword, user.userPassword)
                .then(isMatch => {
                    if (isMatch) {
                        return res.status(200).json({code:"200",data:{id: user.dataValues.id,role: user.role}})
                    }else{
                        return res.status(400).json({ msg: "密码错误" })
                    }
                });
        } else {
            return res.status(400).json({ msg: "用户不存在" })
        }

    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})

/* 
注册接口
POST

参数
userAccount 用户账号
userPassword  用户密码
email 用户邮箱
phone 用户电话

返回值
msg 注册是否成功

 */
router.post('/register', async (req, res) => {
    models.user.findOne({ where: { userAccount: req.body.userAccount } }).then(async user => {
        if (user) {
            return res.status(400).json({ msg: "account has been register" })
        } else {
            await bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(req.body.userPassword, salt,async function (err, hash) {
                    const newUser = models.user.build({
                        userAccount: req.body.userAccount,
                        userPassword: hash,
                        email: req.body.email,
                        phone: req.body.phone,
                    })
                    await newUser.save();
                });
            });
            return res.status(200).json({ msg: "account register" })
        }
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})

/* 
当前用户接口
GET

参数
id 用户id

返回值
safeUser 脱敏后的用户信息

 */
router.get('/userinfo', async (req,res) => {
    models.user.findOne({where: {id: req.query.id}}).then(user => {
        const safeUser = {
            userAvatar: user.userAvatar,
            username: user.username,
            userAccount: user.userAccount,
            phone: user.phone,
            email: user.email,
            integral: user.integral,
            introduce: user.introduce,
            association: user.association,
            class: user.class,
            role: user.role
        }
        return res.status(200).json({user: safeUser})   
    }).catch((err)=>{
        return res.status(400).json({msg: "currentUser failed"})   
    })
})

//TODO

/* 
修改密码接口
POST

参数
userPassword  用户密码
id 修改的用户id

返回值
msg 注册是否成功

 */
router.post('/updatepassword', async (req, res) => {
    console.log(req.body)
    await bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.userPassword, salt,async function (err, hash) {
            models.user.update({userPassword: hash},{ where: { id: req.body.id } }).then(async item => {
                return res.status(200).json({msg:'success'})
            }).catch((error) => {
                return res.status(400).json({ error: error })
            })
        })})
})

/* 
用户删除接口
GET

参数
id 被删除的用户id

 */
router.get('/deleteuser', async (req, res) => {
    console.log("111",req.query.id)
    models.user.destroy({ where: { id: req.query.id } }).then(async record => {
        if (!record) {
            return res.status(400).json({ msg: "no user" })
        } else {
             
            return res.status(200).json({ msg: "user delete" })
        }
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})

/* 
用户更新接口
POST

参数
req 见库表
id 被修改的用户id

 */
router.post('/updateuser', async (req, res) => {
    console.log(req.body.id)
    models.user.update(req.body,{ where: { id: req.body.id } }).then(async item => {
        return res.status(200).json({msg:'success'})
    }).catch((error) => {
        return res.status(400).json({ error: error })
    })
})

/* 
权限管理接口
查找所有
GET

参数

返回值
data 所有用户的数据

 */
router.get('/getuser', async (req,res) => {
    models.user.findAll().then(list => {
        return res.status(200).json({data: list})   
    }).catch((err)=>{
        return res.status(400).json({msg: "getUser failed"})   
    })
})


module.exports = router;