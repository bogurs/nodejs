const express = require('express');
const router = express.Router(); //라우터 사용을 위한 선언
const ctrl = require('./user.ctrl');

router.get('/', ctrl.index);
router.get('/:id', ctrl.show);
router.delete('/:id', ctrl.destroy);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);

module.exports = router; //라우터 exports(메인 index.js에서 사용하기 위함)