<template>
  <div>
    <!-- 百度地图 -->
    <ve-bmap
        :settings="bmapChartSettings"
        :series="bmapChartSeries"
        :after-set-option-once="afterSet"
        :tooltip="{ show: true }">
    </ve-bmap>
  </div>
</template>

<script>

    import VeBmap from 'v-charts/lib/bmap';       // 百度地图

    export default {
        name: 'bmap',
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
                bmapChartSettings:{
                    key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
                    bmap: {
                        center: [120, 30],
                        zoom: 14,
                        roam: true,
                        mapStyle: {}
                    }
                },
                bmapChartSeries : [{
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: [[120, 30, 1]] // 经度，维度，value，...
                }],
                bMapChartData:{
                    columns: ['日期', '销售量1',],
                    rows: [
                        { '日期': '1月1日', '销售量1': 123  },
                        { '日期': '1月2日', '销售量1': 1223 },
                        { '日期': '1月3日', '销售量1': 2123 },
                        { '日期': '1月4日', '销售量1': 4123 },
                        { '日期': '1月5日', '销售量1': 3123 },
                        { '日期': '1月6日', '销售量1': 7123 },
                    ]
                }
            }
        },
        components: { VeBmap },
        methods: {
            afterSet: function (echarts) {
                var bmap = echarts.getModel().getComponent('bmap').getBMap();
                bmap.addControl(new window.BMap.MapTypeControl())
            }
        }
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

