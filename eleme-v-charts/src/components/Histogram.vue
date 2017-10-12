<template>
    <div>
        <!-- 柱状图 -->
        <ve-histogram :data="histogramChartData" ></ve-histogram>
    </div>
</template>

<script>

    import VeHistogram from 'v-charts/lib/histogram';  // 柱状图

    export default {
        name: 'histogram',
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
                histogramChartData:{
                    columns: ['日期', '销售量'],
                    rows: [
                        { '日期': '1月1日', '销售量': 123 },
                        { '日期': '1月2日', '销售量': 1223 },
                        { '日期': '1月3日', '销售量': 2123 },
                        { '日期': '1月4日', '销售量': 4123 },
                        { '日期': '1月5日', '销售量': 3123 },
                        { '日期': '1月6日', '销售量': 7123 },
                        { '日期': '1月7日', '销售量': 7124 },
                        { '日期': '1月8日', '销售量': 7125 },
                        { '日期': '1月9日', '销售量': 7126 },
                        { '日期': '1月10日', '销售量': 8123 },
                        { '日期': '1月11日', '销售量': 9123 },
                        { '日期': '1月12日', '销售量': 10123 },
                        { '日期': '1月13日', '销售量': 11123 },
                        { '日期': '1月14日', '销售量': 12123 },
                        { '日期': '1月15日', '销售量': 1123 },
                        { '日期': '1月16日', '销售量': 37123 },
                    ]
                },
            }
        },
        components: { VeHistogram },
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

