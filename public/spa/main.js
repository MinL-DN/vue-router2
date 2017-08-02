let Vue = require('vue');
let VueRouter = require('vue-router');
let $ = require('jquery');

Vue.use(VueRouter);

new Vue({
    data: () => ({
        bg: 'white',
        watermark: viewData.watermark
    }),
    render: h => h(require('components/app')),
    methods: {
        setWaterMark: function(){
            var self = this;
            var _el = $('.J-WaterMarkBox');
            var _str = '';
            $('.J-WaterMark-P').remove();

            setTimeout(function(){
                for(var i = 0; i < ~~(_el.height() / 160) * 2; i++){
                    _str = _str + '<div class="water-mark">' + self.watermark + '</div>';
                }

                _el.children().addClass('water-mark-c');
                _el.addClass('water-mark-p');
                _el.prepend('<div class="J-WaterMark-P overflow bg-white" style="height:' + _el.children().height() + 'px;position: absolute;top: 0;left: 0;">' + _str + '</div>');
            }, 100);
        },
        removeWaterMark: function(){
            var $el = $('.J-WaterMark-P');
            $el.parent().removeClass('water-mark-p');
            $el.children().removeClass('water-mark-c');
            $el.remove();
        },
        showloading: function(){
            $('.J-Spiner').show();
        },
        hideloading: function(){
            setTimeout(function(){
                $('.J-Spiner').fadeOut();
            }, 500);
        }
    },
    router: new VueRouter({
        routes: require('./router').routes,
        // mode: 'history',
    })
}).$mount('#app');
