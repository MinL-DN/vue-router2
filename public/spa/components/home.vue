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
    import 'less/home';
    import bgSrc from 'img/bg.png';
    import icon_1 from 'img/icon_1.png';
    import icon_2 from 'img/icon_2.png';
    import icon_3 from 'img/icon_3.png';
    import icon_4 from 'img/icon_4.png';

    export default {
        data: () => ({
            arr_img: {
                icon_1: icon_1,
                icon_2: icon_2,
                icon_3: icon_3,
                icon_4: icon_4,
                bg    : bgSrc
            }
        }) ,
        mounted(){
            this.$root.hideloading();
        }
    }
</script>
