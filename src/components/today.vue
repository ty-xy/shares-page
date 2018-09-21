<template>
  <div id="myChart" :style="{width: '400px', height: '400px'}"></div>
</template>

<script>
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
      ["A股指数","2018-09-19",2859.84,"141328722","139965538304","2.04%"]]
    }
  },
  mounted(){
     this.drawLine(); 
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        var text = this.value[0][0]
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        this.value.forEach((value,i)=>{
            this.datax.push(value[1])
            this.series.push(Number(value[2]))
        })
        // 绘制图表
        myChart.setOption({
            title: { text: text },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: this.datax,
                axisLabel: {
                    interval:0,
                    rotate:40
                }

            },
            yAxis: {
                // type: 'value'
                 scale:true,
            },
            series: [{
                data: this.series,
                type: 'line'
            }]
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
