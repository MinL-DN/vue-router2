var path = require('path');// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var webpack = require('webpack');

// 模块导入
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: './main',
    //输出位置
    output: {
        path: path.join(__dirname, './public/dest/js'), //配置输出路径，文件地址，使用绝对路径形式
        filename: '[name].entry.js',//关于filename 我们有个变量就是 [name] = entry的key  当然还有别的变量比如[id],[hash]等,大家可以自行发挥
        // publicPath: './dist/'// 公共文件生成的地址
    },
    // 服务器配置相关，自动刷新!
    // devServer: {
    //     historyApiFallback: true,
    //     hot: false,
    //     inline: true,
    //     grogress: true,
    // },
    // 加载器
    module: {
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer',
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=40000'
            },
        ]
    },
    // 语法转编
    babel: {
        presets: ['es2015']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.less'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            components: path.join(__dirname, './components'),
            less: path.join(__dirname, './public/src/less/spa'),
            js: path.join(__dirname, './public/dest/js'),
        }
    },
    // 开启source-map调试模式，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map'
};
