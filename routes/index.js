module.exports = function(app){

    // 默认定向
    app.get('/', function(req, res){
        res.redirect('/Home/');
    });

    // Home模块
    app.use('/Home', require('./home'));

    // Home模块
    app.use('/spa', require('./detail'));
};