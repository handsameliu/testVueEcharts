<template>
  <div id="app">
    <!-- <img src="./assets/logo1.png"> -->
    <!-- <router-link to='/'>hello</router-link>
    <router-link to='/world'>world</router-link>
    <group>
        <x-input title="手机号" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <router-view></router-view> -->
    <!-- 单条折线图 -->
    <ve-line :data="lineChartData" ></ve-line>
    <!-- 多条折线图 -->
    <ve-line :data="dbLineChartData" :settings="chartSettings"></ve-line>
    <!-- 柱状图 -->
    <ve-histogram :data="histogramChartData" ></ve-histogram>
    <!-- 条形图 -->
    <ve-bar :data="barChartData" :settings="chartSettings"></ve-bar>
    <!-- 饼图 -->
    <ve-pie :data="pieChartData" ></ve-pie>
    <!-- 环图 -->
    <ve-ring :data="ringChartData" ></ve-ring>
    <!-- 漏斗图 -->
    <ve-funnel :data="funnelChartData" ></ve-funnel>
    <!-- 瀑布图 -->
    <ve-waterfall :data="waterfallChartData" ></ve-waterfall>
    <!-- 雷达图 -->
    <ve-radar :data="radarChartData" ></ve-radar>
    <!-- 地图 -->
    <ve-map :data="mapChartData" :settings="{position:'province/beijing'}"></ve-map>
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

    import VeLine from 'v-charts/lib/line';             // 折线图
    import VeHistogram from 'v-charts/lib/histogram';  // 柱状图
    import VeBar from 'v-charts/lib/bar';        // 条形图
    import VePie from 'v-charts/lib/pie';        // 饼图
    import VeRing from 'v-charts/lib/ring';       // 环图
    import VeFunnel from 'v-charts/lib/funnel';     // 漏斗图
    import VeWaterfall from 'v-charts/lib/waterfall';  // 瀑布图
    import VeRadar from 'v-charts/lib/radar';      // 雷达图
    import VeMap from 'v-charts/lib/map';        // 地图
    import VeBmap from 'v-charts/lib/bmap';       // 百度地图

    export default {
        name: 'app',
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
                lineChartData:{ // 单条折线图
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
                dbLineChartData:{
                    columns:['日期','hei','low',],
                    rows:[
                        // 只要键值对对上即可，内容是啥不重要
                        {'日期':'2017年10月11日14:41:24','hei':'140','low':'96'},
                        {'日期':'2017年10月12日14:41:24','hei':'120','low':'126'},
                        {'日期':'2017年10月13日14:41:24','hei':'110','low':'86'},
                        {'日期':'2017年10月14日14:41:24','hei':'160','low':'116'},
                        {'日期':'2017年10月15日14:41:24','hei':'120','low':'76'},
                        {'日期':'2017年10月16日14:41:24','hei':'130','low':'66'},
                    ]
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
                barChartData:{
                    columns: ['日期', '销售量1', '销售量2'],
                    rows: [
                        { '日期': '1月1日', '销售量1': 123 , '销售量2': 1231 },
                        { '日期': '1月2日', '销售量1': 1223 , '销售量2': 123 },
                        { '日期': '1月3日', '销售量1': 2123 , '销售量2': 123 },
                        { '日期': '1月4日', '销售量1': 4123 , '销售量2': 123 },
                        { '日期': '1月5日', '销售量1': 3123 , '销售量2': 123 },
                        { '日期': '1月6日', '销售量1': 7123 , '销售量2': 123 },
                        { '日期': '1月7日', '销售量1': 7124 , '销售量2': 123 },
                        { '日期': '1月8日', '销售量1': 7125 , '销售量2': 123 },
                        { '日期': '1月9日', '销售量1': 7126 , '销售量2': 123 },
                        { '日期': '1月10日', '销售量1': 8123 , '销售量2': 123 },
                        { '日期': '1月11日', '销售量1': 9123 , '销售量2': 123 },
                        { '日期': '1月12日', '销售量1': 10123 , '销售量2': 123 },
                        { '日期': '1月13日', '销售量1': 11123 , '销售量2': 123 },
                        { '日期': '1月14日', '销售量1': 12123 , '销售量2': 123 },
                        { '日期': '1月15日', '销售量1': 1123 , '销售量2': 123 },
                        { '日期': '1月16日', '销售量1': 37123 , '销售量2': 9923 },
                    ]
                },
                pieChartData:{
                    columns: ['日期', '销售量1', '销售量2'],
                    rows: [
                        { '日期': '1月1日', '销售量1': 123 , '销售量2': 1231 },
                        { '日期': '1月2日', '销售量1': 1223 , '销售量2': 123 },
                        { '日期': '1月3日', '销售量1': 2123 , '销售量2': 123 },
                        { '日期': '1月4日', '销售量1': 4123 , '销售量2': 123 },
                        { '日期': '1月5日', '销售量1': 3123 , '销售量2': 123 },
                        { '日期': '1月6日', '销售量1': 7123 , '销售量2': 123 },
                    ]
                },
                ringChartData:{
                    columns: ['日期', '销售量1', '销售量2'],
                    rows: [
                        { '日期': '1月1日', '销售量1': 123 , '销售量2': 1231 },
                        { '日期': '1月2日', '销售量1': 1223 , '销售量2': 123 },
                        { '日期': '1月3日', '销售量1': 2123 , '销售量2': 123 },
                        { '日期': '1月4日', '销售量1': 4123 , '销售量2': 123 },
                        { '日期': '1月5日', '销售量1': 3123 , '销售量2': 123 },
                        { '日期': '1月6日', '销售量1': 7123 , '销售量2': 123 },
                    ]
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
                waterfallChartData:{
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
                radarChartData:{ // 字段越多越好，
                    columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
                    rows: [
                        { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
                        { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
                        { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
                        { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
                        { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
                        { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
                    ]
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
        components: { VeLine,VeHistogram,VeBar,VePie,VeRing,VeFunnel,VeWaterfall,VeRadar,VeMap,VeBmap},
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
