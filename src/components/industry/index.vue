<template>
    <div>
        <select v-model="selected" :style="{width:width,height:height,borderColor:borderColor}">
            <option>交通运输</option>
            <option v-for="item in items" v-bind:value="item" :key="item">{{item}}</option>
        </select>
        <div id="myChart1" :style="{width: widths, height: heights}" ref="myEchart"></div>
        <div id="myChart2" :style="{width: widths, height: heights}"></div>
    </div>
</template>
<script>
import {getCurrentDate} from '../../util/common'
export default {
    props:{
           widths:{
             type:String,
             default:'100%'
           },
           heights:{
             type:String,
             default:'350px'
           }
     },
     data(){
        return {
             items:[
                 "房地产",
                "文化传媒",
                "文教休闲",
                "旅游酒店",
                "有色金属",
                "木业家具",
                "机械行业",
                "材料行业",
                "民航机场",
                "水泥建材",
                "汽车行业",
                "港口水运",
                "煤炭采选",
                "环保工程",
                "玻璃陶瓷",
                "珠宝首饰",
                "电信运营",
                "电力行业",
                "电子信息",
                "电子元件",
                "石油行业",
                "纺织服装",
                "综合行业",
                "航天航空",
                "船舶制造",
                "装修装饰",
                "贵金属",
                "软件服务",
                "输配电气",
                "通讯行业",
                "造纸印刷",
                "酿酒行业",
                "金属制品",
                "钢铁行业",
                "银行",
                "高速公路",
                "食品饮料"],
             selected:"",
             width:"50%",
             height:"30px",
             borderColor:"#ddd",
             begin_time:'2017-09-20',
             end_time:"",
             value:"",
             Chart:""
        }
     },
     beforeMount(){
    // this.getData()
       this.end_time = getCurrentDate(1)
    },
    mounted(){
          this.industry_alias()
          this.main_flow()
      },
    created(){
　　　 //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
      this.selected= this.items[0]
    },
    methods:{
         async getData(userdata,value,url,title){
         let datalist = await this.$axios.get(url,{params:userdata})
            this.value = await datalist.data
            // 基于准备好的dom，初始化echarts实例
            this.Chart = this.$echarts.init(document.getElementById(value))
            
            this.Chart.setOption({
                title: { text: title },
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
                        name:"PB",
                        scale:true,
                        type:"value"
                    },
                    {
                        name:"PE",
                        scale:true,
                        type:"value"
                    },
                    
                ],
                series: [
                    {
                        name:"PB",
                        data: this.value.map((value)=>value[3]),
                        type: 'line',
                        yAxisIndex: 0,
                    },
                    {
                        name:"PE",
                        data: this.value.map((value)=>value[2]),
                        type: 'line',
                        yAxisIndex: 1
                    },

                ],
            });
      },
      industry_alias () {
            const params_data ={
                name:this.selected,
                begin_time:"2017-09-20",
                end_time:this.end_time
            }
             this.getData(params_data,"myChart1",'/api/indusavg',"PE/PB")
      },
      main_flow(){
            const params_data ={
                name:this.selected,
                begin_time:"2017-09-20",
                end_time:this.end_time
            }
             this.getData(params_data,"myChart2",'/api/induscf',"主力净流入")
      }
    },
    watch:{
         selected(newValue, oldValue){
           if(oldValue !== newValue){
                this.industry_alias()
                this.main_flow()
           }
     }
    }
     
}
</script>
<style scoped>
  /* select {
        border: solid 1px #000;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
         background: url()  right center no-repeat;
       
        padding-right: 20px;
    } */
    /* select::-ms-expand { display: block;color:red } */
</style>