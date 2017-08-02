<template>
    <div>
        <a href="javascript:;" class="open-btn" @click="flag = true" v-show="!flag">开启</a>
        <div class="img-box" v-show="flag">
            <div class="img-mask" @click.stop="flag = false"></div>
            <ul class="label-box">
                <li :class="{'active': !i}" v-for="(v, i) in tablist">{{v}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    require('less/img-box');
    export default {
        data: () => ({
            tablist: 30,
            flag: false
        }),
        mounted(){
            this.$root.hideloading();
        }
    }
</script>
