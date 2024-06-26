const { Sequelize } = require('sequelize');
// 创建连接
//参数 -数据库名 -用户名 -密码
const sequelize = new Sequelize('score', 'root', '123456', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 3,
        idle: 4000
    },
    define: {
        'charset': 'utf8'
    }
});
module.exports = sequelize;