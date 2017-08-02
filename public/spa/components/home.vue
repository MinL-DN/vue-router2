<template>
    <div>
        <ul class="menu-btn">
            <li>
                <router-link to="/overview">
                    <img :src="arr_img['icon_1']">
                    <p class="text-blue">整体概况</p>
                </router-link>
            </li>
            <li>
                <router-link to="/datalist">
                    <img :src="arr_img['icon_2']">
                    <p class="text-blue">数据统揽</p>
                </router-link>
            </li>
            <li>
                <a href="javascript:;">
                    <img :src="arr_img['icon_3']">
                    <p class="text-gray">服务中心<br /><span>（规划中）</span></p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img :src="arr_img['icon_4']">
                    <p class="text-gray">供应链<br /><span>（规划中）</span></p>
                </a>
            </li>
        </ul>
        <div class="bottom-img">
            <img :src="arr_img['bg']">
        </div>
        <b class="foot-txt">Vue-Router2</b>
    </div>
</template>

<script>
    require('less/home');
    let bgSrc = require('img/bg.png');

    export default {
        data() {
            var _root = '';
            return {
                arr_img: {
                    icon_1 : _root + '/icon_1.png',
                    icon_2 : _root + '/icon_2.png',
                    icon_3 : _root + '/icon_3.png',
                    icon_4 : _root + '/icon_4.png',
                    bg     : bgSrc
                }
            }
        },
        mounted(){
            this.$root.hideloading();
        }
    }
</script>
