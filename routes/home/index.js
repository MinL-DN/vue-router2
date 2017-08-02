var express = require('express');
var router = express.Router();

// 默认定向登录页
router.get('/', function(req, res){

    var data = {
        $data: {
            title: '登录页面',
            user: 'MinL',
            password: '12345'
        }
    };

    res.render('index', data, function(err, str){
        if(err){
            console.log(err);
            return;
        }
        res.write(str + '');
        res.end();
    });
});

module.exports = router;