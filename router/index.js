module.exports = {
    routes: [
        {
            path: '/',
            component: require('components/home'),
            // key: '整体概况'
        },
        {
            path: '/overview',
            components: {
                default: require('components/overview'),
                // 可以使用复合视图的！
                // bottomtab: require('components/bottomtab')
            },
            // key: '整体概况'
        },
        {
            path: '/datalist',
            component: require('components/datalist'),
            // key: '数据统览'
        }
    ]
}
