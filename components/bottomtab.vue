<!-- 底部Tab组件 -->
<template>
    <ul class="fixed-bottom-tab">
        <li :class="{'active': flag == i}" @click="go(i)" v-for="(v, i) in tablist">{{v}}</li>
    </ul>
</template>

<script>
    require('less/bottomtab');
    export default {
        data() {
            return {
                tablist: ['实时', '昨日', '本月'],
                flag: 0
            }
        },
        methods: {
            go($index) {
                var self = this;
                if(self.flag == $index) return;
                self.flag = $index;
                self.$parent.getData($index);
            }
        }
    }
</script>
