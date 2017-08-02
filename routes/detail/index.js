var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('detail/index', {}, function(err, str){
        if(err){
            console.log(err);
            return;
        }
        res.write(str + '');
        res.end();
    });
});

module.exports = router;