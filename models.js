const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    db: './db.sqlite'
});

//User DB 모델 생성
const User = sequelize.define('User', {
    name: Sequelize.STRING
});

module.exports = {Sequelize, sequelize, User};