<template>
    <div>
        <div id="myChart1" :style="{width: '400px', height: '350px'}"></div>
        <div id="myChart2" :style="{width: '400px', height: '350px'}"></div>
        <div id="myChart3" :style="{width: '400px', height: '350px'}"></div>
        <div id="myChart4" :style="{width: '400px', height: '350px'}"></div>
        <div id="myChart5" :style="{width: '400px', height: '350px'}"></div>
    </div>
</template>
<script>
import calendar from './calendar.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      datax:[],
      series:[],
      value:[["A股指数","2018-09-03",2849.18,"102069944","104730607616","1.12%"],
      ["A股指数","2018-09-04", 2880.46,"108833636","113601142784","1.63%"],
      ["A股指数","2018-09-05",2831.96,"104869284","107188801536","1.5%"],
      ["A股指数","2018-09-06",2818.61,"98894740","106178228224","1.32%"],
      ["A股指数","2018-09-07",2829.85,"107395044","113750769664","1.67%"],
      ["A股指数","2018-09-10",2795.48,"103394401","102735400960","1.34%"],
      ["A股指数","2018-09-11",2790.59,"99682545","96753762304","1.05%"],
      ["A股指数","2018-09-12",2781.50,"89894047","93357383680","0.94%"],
      ["A股指数","2018-09-13",2813.42,"107194634","112361713664","1.35%"],
      ["A股指数","2018-09-14",2808.26,"99911173","104922112000","0.73%"],
      ["A股指数","2018-09-17",2776.96,"88137065","86899286016","0.87%"],
      ["A股指数","2018-09-18",2827.46,"115591140","112917463040","2.11%"],
      ["A股指数","2018-09-19",2859.84,"141328722","139965538304","2.04%"]],
      valuex:[]
    }
  },
  mounted(){
     this.drawLine1();
     this.drawLine2();
     this.drawLine3();
     this.drawLine4();
     this.drawLine5();
  },
  methods: {
    drawLine1(){
        // 基于准备好的dom，初始化echarts实例
        var text = this.value[0][0]
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        this.value.forEach((value,i)=>{
            this.datax.push(value[1])
            this.series.push(Number(value[2]))
        })
        this.valuex = this.series.reverse(),
        myChart.setOption({
            title: { text: "上证A股走势" },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: this.datax,
                axisLabel: {
                    interval:0,
                    rotate:40
                }

            },
            yAxis: [
                // type: 'value'
                {
                 name:"A股",
                 scale:true,
                 type:"value"
                },
                {
                 name:"B股",
                 scale:true,
                 type:"value"
                }
                
            ],
            series: [
                {
                name:"A股",
                data: this.series,
                type: 'line',
                 yAxisIndex: 0,
                },
                {
                name:"B股",
                data:this.valuex,
                yAxisIndex: 1,
                type: 'line'
                }
            ]
        });
    },
    drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        var text = this.value[0][0]
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        this.datax = [];
        this.series=[]
        this.value.forEach((value,i)=>{
            this.datax.push(value[1])
            this.series.push(Number(value[2]))
        })
        this.valuex = this.series.reverse(),
        myChart.setOption({
            title: { text: "深圳A股走势" },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: this.datax,
                axisLabel: {
                    interval:0,
                    rotate:40
                }

            },
            yAxis: [
                // type: 'value'
                {
                 name:"A股",
                 scale:true,
                 type:"value"
                },
                {
                 name:"B股",
                 scale:true,
                 type:"value"
                }
                
            ],
            series: [
                {
                name:"A股",
                data: this.series,
                type: 'line',
                 yAxisIndex: 0,
                },
                {
                name:"B股",
                data:this.valuex,
                yAxisIndex: 1,
                type: 'line'
                }
            ]
        });
    },
    drawLine3(){
        // 基于准备好的dom，初始化echarts实例
        var text = this.value[0][0]
        let myChart = this.$echarts.init(document.getElementById('myChart3'))
        this.datax = [];
        this.series=[]
        this.value.forEach((value,i)=>{
            this.datax.push(value[1])
            this.series.push(Number(value[2]))
        })
        this.valuex = this.series.reverse(),
        myChart.setOption({
            title: { text: "成交量/成交额" },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: this.datax,
                axisLabel: {
                    interval:0,
                    rotate:40
                }

            },
            yAxis: [
                // type: 'value'
                {
                 name:"A股",
                 scale:true,
                 type:"value"
                },
                {
                 name:"B股",
                 scale:true,
                 type:"value"
                }
                
            ],
            series: [
                {
                name:"A股",
                data: this.series,
                type: 'line',
                 yAxisIndex: 0,
                },
                {
                name:"B股",
                data:this.valuex,
                yAxisIndex: 1,
                type: 'line'
                }
            ]
        });
    },
    drawLine4(){
        // 基于准备好的dom，初始化echarts实例
        var text = this.value[0][0]
        let myChart = this.$echarts.init(document.getElementById('myChart4'))
        this.datax = [];
        this.series=[]
        this.value.forEach((value,i)=>{
            this.datax.push(value[1])
            this.series.push(Number(value[2]))
        })
        this.valuex = this.series.reverse(),
        myChart.setOption({
            title: { text: "PE/PB" },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: this.datax,
                axisLabel: {
                    interval:0,
                    rotate:40
                }

            },
            yAxis: [
                // type: 'value'
                {
                 name:"A股",
                 scale:true,
                 type:"value"
                },
                {
                 name:"B股",
                 scale:true,
                 type:"value"
                }
                
            ],
            series: [
                {
                name:"A股",
                data: this.series,
                type: 'line',
                 yAxisIndex: 0,
                },
                {
                name:"B股",
                data:this.valuex,
                yAxisIndex: 1,
                type: 'line'
                }
            ]
        });
    },
    drawLine5(){
        // 基于准备好的dom，初始化echarts实例
        var text = this.value[0][0]
        let myChart = this.$echarts.init(document.getElementById('myChart5'))
        this.datax = [];
        this.series=[]
        this.value.forEach((value,i)=>{
            this.datax.push(value[1])
            this.series.push(Number(value[2]))
        })
        this.valuex = this.series.reverse(),
        myChart.setOption({
            title: { text: "开户数走势" },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: this.datax,
                axisLabel: {
                    interval:0,
                    rotate:40
                }

            },
            yAxis: [
                // type: 'value'
                {
                 name:"A股",
                 scale:true,
                 type:"value"
                },
                {
                 name:"B股",
                 scale:true,
                 type:"value"
                }
                
            ],
            series: [
                {
                name:"A股",
                data: this.series,
                type: 'line',
                 yAxisIndex: 0,
                },
                {
                name:"B股",
                data:this.valuex,
                yAxisIndex: 1,
                type: 'line'
                }
            ]
        });
    }
  },
  components: {
        calendar
    },
}
</script>
<style scoped>

</style>
