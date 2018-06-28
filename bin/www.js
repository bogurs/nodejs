const app = require('../index');
const syncDb = require('./sync-db');

syncDb().then( ()=>{ //콜백함수의 파라미터로 인자를 사용하지 않겠다는 의미이며 '()' 또는 '_'를 사용할 수 있다.
    console.log('Sync database!');
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
});