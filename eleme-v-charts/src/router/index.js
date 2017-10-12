import Vue from 'vue';
import Router from 'vue-router';

import Line from '../components/Line.vue';      // 折线图
import Histogram from '../components/Histogram.vue'; // 柱状图
import Bar from '../components/Bar.vue';       // 条形图
import Pie from '../components/Pie.vue';       // 饼图
import Ring from '../components/Ring.vue';      // 环图
import Funnel from '../components/Funnel.vue';    // 漏斗图
import Waterfall from '../components/Waterfall.vue'; // 瀑布图
import Radar from '../components/Radar.vue';     // 雷达图
import Map from '../components/Map.vue';       // 地图
import Bmap from '../components/Bmap.vue';      // 百度地图

Vue.use(Router);

// 两种页面调用形式，第一种直接赋值，第二种按需赋值

export default new Router({
    routes: [
        {
            path: '/line',
            name: 'line',
            component:Line
        },{
            path: '/histogram',
            name: 'histogram',
            component:Histogram
        },{
            path: '/bar',
            name: 'bar',
            component:(resolve)=>{require(['../components/Bar.vue'],resolve)}
        },{
            path: '/pie',
            name: 'pie',
            component:(resolve)=>{require(['../components/Pie.vue'],resolve)}
        },{
            path: '/ring',
            name: 'ring',
            component:(resolve)=>{require(['../components/Ring.vue'],resolve)}
        },{
            path: '/funnel',
            name: 'funnel',
            component:(resolve)=>{require(['../components/Funnel.vue'],resolve)}
        },{
            path: '/waterfall',
            name: 'waterfall',
            component:(resolve)=>{require(['../components/Waterfall.vue'],resolve)}
        },{
            path: '/radar',
            name: 'radar',
            component:(resolve)=>{require(['../components/Radar.vue'],resolve)}
        },{
            path: '/map',
            name: 'map',
            component:(resolve)=>{require(['../components/Map.vue'],resolve)}
        },{
            path: '/bmap',
            name: 'bmap',
            component:(resolve)=>{require(['../components/Bmap.vue'],resolve)}
        }
    ]
})
