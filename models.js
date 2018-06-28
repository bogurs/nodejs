const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false
});

//User DB 모델 생성
const User = sequelize.define('User', {
    name: Sequelize.STRING
});

module.exports = {Sequelize, sequelize, User};