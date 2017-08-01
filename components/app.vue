<template>
    <div id="app">

        <!-- 渲染层 -->
        <router-view></router-view>

        <!-- 底部渲染层（复合视图） -->
        <!-- <router-view name="bottomtab"></router-view> -->

        <!-- 其实是个过渡动画没有其他意思😄 -->
        <div class="spiner J-Spiner">
            <div class="sk-spinner sk-spinner-wandering-cubes">
                <div class="sk-cube1"></div>
                <div class="sk-cube2"></div>
            </div>
        </div>
    </div>
</template>
<script>
    require('less/app');
</script>
