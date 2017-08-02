let path = require('path');//用于处理目录的对象，提高开发效率

let express = require('express');

let app = express();

let history = require('connect-history-api-fallback');

// 设定视图存放的目录
app.set('views', path.join(__dirname, 'views'));
// 注册模板
app.set('view engine', 'ejs');
// ejs-mate
// app.engine('ejs', require('ejs-mate'));
// app.locals._layoutFile = 'Shared/_layout'; //全局引用_layout模板

// 指定使用的静态文件所处位置
app.use(express.static(path.join(__dirname, 'public')));

app.use(history({
    rewrites: [
        {
            from: /\/guoneiyou\/line\/t\dj\dp\d+c\d+\.html$/,
            to: '/spa'
        },
        {
            from: /.*/,
            to: function(re){
                console.log(re);
                return re.parsedUrl.pathname;
            }
        }
    ]
}));

// 路由配置
require('./routes')(app);

app.listen(4000);