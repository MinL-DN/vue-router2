module.exports = {
    routes: [
        {
            path: '/',
            component: r => require.ensure([], () => r(require('components/home')), 'home'),
        },
        {
            path: '/overview',
            components: {
                default: r => require.ensure([], () => r(require('components/overview')), 'overview'),
                // 可以使用复合视图的！
                // bottomtab: require('components/bottomtab')
            },
        },
        {
            path: '/datalist',
            component: r => require.ensure([], () => r(require('components/datalist')), 'datalist')
        },
        {
            path: '/img-box',
            component: r => require.ensure([], () => r(require('components/img-box')), 'img-box')
        }
    ]
}
