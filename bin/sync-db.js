const models = require('../models');

module.exports = () => {
    const options = {
        force: process.env.NODE_ENV === 'test' ? true : false
    };
    return models.sequelize.sync(options); //force: true는 기존에 DB가 있더라도 재생성하겠다는 의미이다.
}