<template>
  <div>
    <!-- 地图 -->
    <ve-map :data="mapChartData" :settings="{position:'province/beijing'}"></ve-map>
  </div>
</template>

<script>

    import VeMap from 'v-charts/lib/map';        // 地图

    export default {
        name: 'map',
        data(){
            return {
                chartSettings:{
                    // 图表设置
                    // area: true, // 线条堆叠面积背景色
                    // labelMap: { // 替换展示名称,需要和数据中的key一一对应
                    //     hei: '高压',
                    //     low: '低压'
                    // },
                    // metrics: ['hei', 'low'], // 展示的指标
                    // dimension: ['日期'],      // 展示x轴数据的维度
                    // label: { // 在xy轴交汇节点上直接显示数值
                    //     normal: {
                    //         show: true
                    //     }
                    // },
                    // stack:{ // 柱状图 合并多个字段在一起显示
                    //     'xxx':['销售量1','销售量2']
                    // }
                },
                mapChartData:{
                    columns: ['位置', 'GDP'],
                    rows: [
                        { '位置': '延庆区', 'GDP': 123 },
                        { '位置': '密云区', 'GDP': 1223 },
                        { '位置': '平谷区', 'GDP': 2123 },
                        { '位置': '海淀区', 'GDP': 4123 }
                    ]
                },
            }
        },
        components: { VeMap },
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

