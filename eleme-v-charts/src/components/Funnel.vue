<template>
  <div>
    <!-- 漏斗图 -->
    <ve-funnel :data="funnelChartData" ></ve-funnel>
  </div>
</template>

<script>

    import VeFunnel from 'v-charts/lib/funnel';     // 漏斗图

    export default {
        name: 'funnel',
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
                funnelChartData:{
                    columns: ['日期', '销售量1',],
                    rows: [
                        { '日期': '1月1日', '销售量1': 123  },
                        { '日期': '1月2日', '销售量1': 1223 },
                        { '日期': '1月3日', '销售量1': 2123 },
                        { '日期': '1月4日', '销售量1': 4123 },
                        { '日期': '1月5日', '销售量1': 3123 },
                        { '日期': '1月6日', '销售量1': 7123 },
                    ]
                },
            }
        },
        components: { VeFunnel },
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

