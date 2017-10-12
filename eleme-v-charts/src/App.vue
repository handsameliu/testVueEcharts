<template>
  <div id="app">
    <!-- <img src="./assets/logo1.png"> -->
    <router-link to='/line'>单条/多条折线图</router-link>
    <router-link to='/histogram'>柱状图</router-link>
    <router-link to='/bar'>条形图</router-link>
    <router-link to='/pie'>饼图</router-link>
    <router-link to='/ring'>环图</router-link>
    <router-link to='/funnel'>漏斗图</router-link>
    <router-link to='/waterfall'>瀑布图</router-link>
    <router-link to='/radar'>雷达图</router-link>
    <router-link to='/map'>地图</router-link>
    <router-link to='/bmap'>百度地图</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

