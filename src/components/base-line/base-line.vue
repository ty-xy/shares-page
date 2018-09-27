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
        <div id="myChart1" :style="{width: '400px', height: '350px'}"></div>
        <div id="myChart2" :style="{width: '400px', height: '350px'}"></div>
        <div id="myChart3" :style="{width: '400px', height: '350px'}"></div>
        <div id="myChart4" :style="{width: '400px', height: '350px'}"></div>
        <div id="myChart5" :style="{width: '400px', height: '350px'}"></div>
    </div>
</template>
<script>
import DatePicker from 'vue-datepicker/vue-datepicker-es6.vue'
export default {
  name: 'hello',
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
      value:[],
      valuex:[],
      success_valuex:[],
      success_valuey:[],
      success_series:[]
    }
  },
  beforeMount(){
    // this.getData()
    this.endtime.time = this.getCurrentDate(1)
  },
  mounted(){
     this.drawLine1();
     this.drawLine2();
     this.drawLine3();
     this.drawLine4();
     this.drawLine5();
  },
  methods: {
    async getData(userdata,value,url){
         let datalist = await this.$axios.get(url,{params:userdata})
        this.value = await datalist.data
        this.datax=[]
        this.series=[]
        await this.value.forEach((value,i)=>{
            this.datax.push(value[1])
            this.series.push(Number(value[2]))
        })
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(value))
        this.valuex = this.series.reverse(),
        myChart.setOption({
            title: { text: this.value[0][0] },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: this.datax,
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
    getCurrentDate(format){	
        var now = new Date();	  
        var year = now.getFullYear(); //得到年份	 
        var month = now.getMonth();//得到月份	  
        var date = now.getDate();//得到日期	  
        var day = now.getDay();//得到周几	 
        var hour = now.getHours();//得到小时	  
        var minu = now.getMinutes();//得到分钟	  
        var sec = now.getSeconds();//得到秒	  
        month = month + 1;	 
        if (month < 10) month = "0" + month;	 
        if (date < 10) date = "0" + date;	 
        if (hour < 10) hour = "0" + hour;	  
        if (minu < 10) minu = "0" + minu;	  
        if (sec < 10) sec = "0" + sec;	  
        var time = "";	  
        //精确到天	  
        if(format==1){time = year + "-" + month + "-" + date;
        }	 
        //精确到分	  
        else if(format==2){time = year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;}	
        return time;
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
     drawLine3(){
        var usedata = {
               begin_time:this.startTime.time,
               end_time:this.endtime.time
        }
    },
    //开户数
    async drawLine4(){
        let userdata ={
            begin_time:this.startTime.time,
            end_time:this.endtime.time
            }
        let success_done = await  this.$axios.get("/api/gpzhnew",{params:userdata})
        //  success_done.data.forEach((value,i)=>{
        //      console.log(value,i)
        //  })
        // this.success_valuex =  await success_done.data.map((v,i)=>{ return v[0]})
        // console.log(this.success_valuex)
        let myChart = this.$echarts.init(document.getElementById("myChart4"))
        myChart.setOption({
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
    //pb-pe
    drawLine5(){
        
    }
   
  },
   watch: {
    "startTime.time"(newValue, oldValue){
           if(oldValue !== newValue){
                this.drawLine1()
                this.drawLine2()
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
