module.exports = {
    routes: [
        {
            path: '/',
            component: r => require(['components/home'], r)
            // key: '整体概况'
        },
        {
            path: '/overview',
            components: {
                default: r => require(['components/overview'], r)
                // 可以使用复合视图的！
                // bottomtab: require('components/bottomtab')
            },
            // key: '整体概况'
        },
        {
            path: '/datalist',
            component: r => require(['components/datalist'], r)
            // key: '数据统览'
        }
    ]
}
