<template>
    <div>
       <div class="order-list-choose">
          <div class="order-list-option">
            开始日期:
            <date-picker :date="startTime" :option="option" :limit="limit" v-model="startTime.time"></date-picker>
          </div>    
          <div class="order-list-option">
            结束日期:
            <date-picker :date="endtime" :option="option" :limit="limit"></date-picker>
          </div>
       </div>
        <div id="myChart1" :style="{width: width, height: height}" ref="myEchart"></div>
        <div id="myChart2" :style="{width: width, height: height}"></div>
        <div id="myChart3" :style="{width: width, height: height}"></div>
        <div id="myChart4" :style="{width: width, height: height}"></div>
        <div id="myChart5" :style="{width: width, height: height}"></div>
        <div id="myChart6" :style="{width: width, height: height}"></div>
    </div>
</template>
<script>
import DatePicker from 'vue-datepicker/vue-datepicker-es6.vue'
import {getCurrentDate} from '../../util/common'
export default {
  name: 'hello',
  props:{
           className: {
             type:String,
             default:'yourClassName'
           },
           id:{
             type:String,
             default:'yourID'
           },
           width:{
             type:String,
             default:'100%'
           },
           height:{
             type:String,
             default:'350px'
           }
    },
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        datax:[],
        dateRange: '',
        series:[],
        startTime: {
            time: '2012-01-01'
        },
        endtime: {
            time: ''
        },
        space:0,
        option: {
            type: 'day',
            week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            format: 'YYYY-MM-DD',
            placeholder: "请选择时间",
            inputStyle: {
                'display': 'inline-block',
                'padding': '2px',
                'margin':'2px',
                'line-height': '22px',
                'font-size': '14px',
                'border': '2x solid #fff',
                'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                'border-radius': '2px',
                'color': '#5F5F5F'
            },
            color: {
                header: '#ccc',
                headerText: '#f00'
            },
            buttons: {
                ok: "确定",
                cancel: '取消'
            },
            overlayOpacity: 0.5, // 0.5 as default
            dismissible: true // as true as default
        },
        timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
        },
        limit: [{
            type: Array,
            default:function _default(){
                return [];
            }
        }],
        chart1:'',
        chart2:'',
        chart3:'',
        chart4:'',
        Chart:""
    }
  },
  beforeMount(){
    // this.getData()

    this.endtime.time = getCurrentDate(1)
  },
  mounted(){
     this.init()
     this.drawLine1();
     this.drawLine2();
     this.drawLine3();
     this.drawLine4();
     this.drawLine5();
     this.drawLine6();
  },
methods:{
    
    async getData(userdata,value,url){
         let datalist = await this.$axios.get(url,{params:userdata})
        this.value = await datalist.data
        // 基于准备好的dom，初始化echarts实例
         this.Chart = this.$echarts.init(document.getElementById(value))

        this.Chart.setOption({
            title: { text: this.value[0][0] },
            tooltip: {},
            xAxis: {
                type: 'category',
                data:  this.value.map((value)=>value[1]),
                axisLabel: {
                    interval:'auto',
                    rotate:45
                },
                scale:true
            },
            yAxis: [
                // type: 'value'
                {
                 name:"A股",
                 scale:true,
                 type:"value"
                }
                
            ],
            series: [
                {
                name:"A股",
                data: this.value.map((value)=>value[2]),
                type: 'line',
                 yAxisIndex: 0,
                }
            ],
        });
    },
    drawLine1(){
          let userdata ={
           name:"深证成指",
           begin_time:this.startTime.time,
           end_time:this.endtime.time
        }
        this.getData(userdata,"myChart1",'/api/hszs')
    },
 
    drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        // var text = this.value[0][0]
        let userdata ={
           name:"上证指数",
           begin_time:this.startTime.time,
           end_time:this.endtime.time
        }
        this.getData(userdata,"myChart2",'/api/hszs')
    },
    // 成交量，成交额
    async drawLine3(){
        var userdata = {
               begin_time:this.startTime.time,
               end_time:this.endtime.time
        }
        let success_done = await this.$axios.get("/api/votur",{params:userdata})
        this.chart1 = this.$echarts.init(document.getElementById("myChart3"))
        this.chart1.setOption({
            title: { text:"成交量/成交额"},
            tooltip: {},
            xAxis: {
            type: 'category',
            data: success_done.data.map((v,i,arr)=> v[0]),
            // interval: '0',    // 显示全部数据，还有auto/>0数字均可
            // boundaryGap : true,
            axisLabel: {
                interval:'auto',
                rotate:45
            },
            scale:true
            },
            yAxis: [
            {
                name:"成交量",
                scale:true,
                type:"value",
                axisLabel: {
                    margin: 2,
                    formatter: function (value, index) {
                        if (value >= 10000 && value < 10000000) {
                            value = value / 10000 + "万";
                        }else if (value >= 10000000&&value<100000000) {
                            value = value / 100000000 + "千万";
                        }else if (value>= 100000000){
                            value = value/100000000+ "亿";
                        }
                        return value;
                        }
                },
                grid: {
                    left: 35
                },
            },
            {
                name:"成交额",
                scale:true,
                type:"value",
                axisLabel: {
                    margin: 5,
                    formatter: function (value, index) {
                        
                            value = value/Math.pow(10,12)+ "万亿";
                        
                        return value;
                    }
                },
                grid: {
                    right: 50
                },
            }

            ],
            series: [
            {
                name:"A股",
                data: success_done.data.map((v,i,arr)=> v[1]),
                type: 'line',
                itemStyle : {
                normal : {
                    color:"blue",
                    lineStyle:{
                    color:'blue'
                    }
                }

                },
                yAxisIndex: 0,
            },
            {
                name:"B股",
                data: success_done.data.map((v,i,arr)=> v[2]),
                type: 'line',
                yAxisIndex: 1,
            }
            ],
        });
    },
     //开户数
    async drawLine4(){
        let userdata ={
            begin_time:this.startTime.time,
            end_time:this.endtime.time
            }
        let success_done = await  this.$axios.get("/api/gpzhnew",{params:userdata})
        this.chart2 = this.$echarts.init(document.getElementById("myChart4"))
        this.chart2.setOption({
            title: { text:"开户数"},
            tooltip: {},
            xAxis: {
                type: 'category',
                data: success_done.data.map((v,i,arr)=> v[0]),
                interval: '0',    // 显示全部数据，还有auto/>0数字均可
                // boundaryGap : true,
                axisLabel: {
                    interval:this.space,
                    rotate:45
                },
                scale:true
            },
            yAxis: [
                // type: 'value'
                {
                 name:"周开户数",
                 scale:true,
                 type:"value",
              
                },
                {
                    name:"累开户数",
                    scale:true,
                    type:"value",
                        axisLabel: {
                        margin: 5,
                        formatter: function (value, index) {
                                value = value/Math.pow(10,4)+ "万";
                            return value;
                        }
                    },
                    grid: {
                        right: 50
                    },
                }

            ],
            series: [
                {
                name:"A股",
                data: success_done.data.map((v,i,arr)=> v[1]),
                type: 'line',
                itemStyle : {
                    normal : {
                        color:"blue",
                    lineStyle:{
                        color:'blue'
                                }
                    }

                },
                 yAxisIndex: 0,
                },
                  {
                name:"B股",
                data: success_done.data.map((v,i,arr)=> v[2]),
                type: 'line',
                 yAxisIndex: 1,
                }
            ],
        });
    },
    // pb-pe
    async drawLine5(){
        let userdata ={
          begin_time:this.startTime.time,
          end_time:this.endtime.time
        }
        let success_done = await  this.$axios.get("/api/vcpepb",{params:userdata})
        //  success_done.data.forEach((value,i)=>{
        //      console.log(value,i)
        //  })
        // this.success_valuex =  await success_done.data.map((v,i)=>{ return v[0]})
        // console.log(this.success_valuex)
        this.chart3 = this.$echarts.init(document.getElementById("myChart5"))
        this.chart3.setOption({
          title: { text:"PE_PB"},
          tooltip: {},
          xAxis: {
            type: 'category',
            data: success_done.data.map((v,i,arr)=> v[0]),
            // interval: '0',    // 显示全部数据，还有auto/>0数字均可
            // boundaryGap : true,
            axisLabel: {
              interval:'auto',
              rotate:45
            },
            scale:true
          },
          yAxis: [
            // type: 'value'
            {
              name:"A股",
              scale:true,
              type:"value",
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
              data: success_done.data.map((v,i,arr)=> v[1]),
              type: 'line',
              itemStyle : {
                normal : {
                  color:"blue",
                  lineStyle:{
                    color:'blue'
                  }
                }

              },
              yAxisIndex: 0,
            },
            {
              name:"A股",
              data: success_done.data.map((v,i,arr)=> v[2]),
              type: 'line',
              yAxisIndex: 1,
            }
          ],
        });

      },
    //流通市值
    async drawLine6(){
      let userdata ={
        begin_time:this.startTime.time,
        end_time:this.endtime.time
      }
      let success_done = await this.$axios.get("/api/cmkvolue",{params:userdata})
      this.chart4 = this.$echarts.init(document.getElementById("myChart6"))
      this.chart4.setOption({
        title: { text:"流通市值"},
        tooltip: {},
        xAxis: {
          type: 'category',
          data: success_done.data.map((v,i)=> v[0]),
          // interval: '0',    // 显示全部数据，还有auto/>0数字均可
          // boundaryGap : true,
          axisLabel: {
            interval:'auto',
            rotate:45
          },
          scale:true
        },
        yAxis: [
          // type: 'value'
          {
            name:"A股",
            scale:true,
            type:"value",
          }

        ],
        series: [
          {
            name:"A股",
            data: success_done.data.map((v,i)=> v[1]),
            type: 'line',
            itemStyle : {
              normal : {
                color:"blue",
                lineStyle:{
                  color:'blue'
                }
              }

            },
            yAxisIndex: 0,
          }
        ],
      });

    },
   init() {
        const self = this;//因为箭头函数会改变this指向，指向windows。所以先把this保存
        window.onresize = function() {
            self.Chart.resize();
            self.chart1.resize();
            self.chart2.resize();
            self.chart3.resize();
            self.chart4.resize();
        }
     }

  },
   watch: {
    "startTime.time"(newValue, oldValue){
           if(oldValue !== newValue){
                this.drawLine1()
                this.drawLine2()
                this.drawLine3()
                this.drawLine4()
                this.drawLine5()
                this.drawLine6()
           }
     }
  },
  components:{
     DatePicker 
  }
}
</script>
<style scoped>
.order-list-choose{
    display:flex;
}
</style>
