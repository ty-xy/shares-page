<template>
    <div>
      <div id="myChart" :style="{width: width, height: height}"></div>
      <div id= "myChart1" :style="{width: width, height: height}"></div>
      <div id= "myChart2" :style="{width: width, height: height}"></div>
      <div id= "myChart3" :style="{width: width, height: height}"></div>
     <div id="myChart4" :style="{width: width, height: height}"></div>
      <div id= "myChart5" :style="{width: width, height: height}"></div>
      <div id= "myChart6" :style="{width: width, height: height}"></div>
      <div id= "myChart7" :style="{width: width, height: height}"></div>
      <div id="myChart8" :style="{width: width, height: height}"></div>
      <div id= "myChart9" :style="{width: width, height: height}"></div>
      <div id= "myChart10" :style="{width: width, height: height}"></div>
      <div id= "myChart11" :style="{width: width, height: height}"></div>
       <div id="myChart12" :style="{width: width, height: height}"></div>
      <div id= "myChart13" :style="{width: width, height: height}"></div>
      <div id= "myChart14" :style="{width: width, height: height}"></div>
      <div id= "myChart16" :style="{width: width, height: height}"></div>
       <div id="myChart17" :style="{width: width, height: height}"></div>
      <div id= "myChart18" :style="{width: width, height: height}"></div>
      <div id= "myChart19" :style="{width: width, height: height}"></div>
      <div id= "myChart20" :style="{width: width, height: height}"></div>
    </div>
</template>
<script>
import {API_HOST} from '../../util/config'
export default {
     data(){
        return {
             items:[],
             selected:"",
             height:"300px",
             width:"100%",
             chart1:"",
             labelOption:'',
             first:[],
             second:[],
             third:[],
             fourth:[],
             length:[],
             nainaide:[],
             mamade:[],
             fish_produce:[],
             wood:[],
             leng:'',
             chart2:"",
             chart3:'',
             chart4:"",
             chart5:"",
             chart6:"",
             chart7:'',
             chart8:"",
             chart9:"",
             chart10:"",
             chart11:'',
             chart12:"",
             chart13:"",
             company_datas:"",
             customers_data:"",
             mamades:[],
             woods:[],
             nainaides:[]

        }
     },
     mounted(){
         this.people_count()
         this.customer_count()
         this.finance_count()
         this.company_count()
         this.customers()
         this.people_counts()
         this.city_count()
         this.code_count()
         this.loans_count()
         this.product_progess_count()
         this.credit_count()
         this.business_count()
         this.init()
         this.out_product_count()
         this.socity_coume_count()
     },
     methods:{
        async people_count (){
             let people_data = await this.$axios.get('/api/gdp')
            //  let company_data = await this.$axios.get("/api/ecmcgpi")
             this.leng= people_data.data.length
             var num = this.leng%4
             people_data.data.forEach((v,i,arr)=>{
                 if(i<this.leng-num){
                    if(i%4===0){
                        this.first.push(v[2])
                        var year = v[1].slice(0,4)
                        this.length.push(year)
                    }else if(i%4===1){
                        this.second.push(v[2])
                    }else if(i%4===2){
                        this.third.push(v[2])
                    }else if(i%4===3){
                        this.fourth.push(v[2])
                    }
                 }else if(i===this.leng-num){
                     var year = v[1].slice(0,4)
                     this.length.push(year)
                     if(num===1){
                         this.fourth.push(v[2])
                     }else if(num==2){
                         this.first.push(v[2])
                         this.fourth.push(arr[i+1][2])
                        
                     }else{
                          this.first.push(v[2])
                          this.second.push(arr[i+1][2])
                          this.fourth.push(arr[i+2][2])
                     }
                 }
               
             })
             this.chart1 = this.$echarts.init(document.getElementById("myChart"))
             this.chart1.setOption({
                title: { text:"GDP"},
                color: ['#003366', '#006699', '#4cabce', '#e5323e'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['Forest', 'Steppe', 'Desert', 'Wetland']
                },
                calculable: true,
                // toolbox: {
                //     show: true,
                //     orient: 'vertical',
                //     left: 'right',
                //     top: 'center',
                //     feature: {
                //         mark: {show: true},
                //         dataView: {show: true, readOnly: false},
                //         magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                //         restore: {show: true},
                //         saveAsImage: {show: true}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    axisTick: {show: false},
                    data: this.length
                        },
               
                yAxis: {
                type: 'value'
                    },
                grid:{
                    left:60
                    },
                series: [
                        {
                        name: '1季度',
                        type: 'bar',
                        label: this.labelOption,
                        data: this.fourth
                    },
                    {
                        name: '1-2季度',
                        type: 'bar',
                        barGap: 0,
                        label: this.labelOption,
                        data: this.first
                    },
                    {
                        name: '1-3季度',
                        type: 'bar',
                        label: this.labelOption,
                        data:this.second
                    },
                    {
                        name: '1-4季度',
                        type: 'bar',
                        label:this.labelOption,
                        data:this.third
                    },
                    
                ]
             })    
             this.labelOption = {
                normal: {
                    show: true,
                    position: 'insideBottom',
                    // distance: 15,
                    align: "left",
                    verticalAlign: "middle",
                    rotate: 90,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 16,
                    rich: {
                        name: {
                            textBorderColor: '#fff'
                        }
                    }
                }
            };
        },
        //  企业商品价格指数
        async  company_count (){
           let company_data = await this.$axios.get("/api/ecmcgpi") 
           this.company_datas = company_data.data
            this.company_datas.forEach((v)=>{
                if(v[3]===2){
                    this.mamade.push(v[1])
                    this.nainaide.push(v[2])
                }else if(v[3]===3){
                    this.wood.push(v[2])
                }else{
                    this.fish_produce.push(v[2])
                }
           })
           this.chart4 = this.$echarts.init(document.getElementById("myChart3"))
           this.chart4.setOption({
                title: {
                    text: '企业商品价格指数',
                    itemGap:20,
                   
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['农产品','矿产品','煤电油'],
                    right: '1%',
                    top:20,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: this.mamade
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'农产品',
                        type:'line',
                        stack: '总量',
                        data:this.nainaide,
                    },
                    {
                        name:'矿产品',
                        type:'line',
                        stack: '总量',
                        data:this.wood
                    },
                    {
                        name:'煤电油',
                        type:'line',
                        stack: '总量',
                        data:this.fish_produce
                    },
                ]
           });
        },
        async common_count (url,content,text){
            let customer_data = await this.$axios.get(url)
            // let finance = await this.$axios.get("")
            this.chart2=this.$echarts.init(document.getElementById(content))
            this.chart2.setOption({
                title: { text:text
                },
                tooltip: {},
                xAxis: {
                type: 'category',
                data: customer_data.data.map((v,i)=> v[1]),
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
                    data: customer_data.data.map((v,i)=> v[2]),
                    type: 'line',
                    itemStyle : {
                    normal : {
                        color:"blue",
                        lineStyle:{
                        color:'red'
                        }
                    }
                    },
                    yAxisIndex: 0,
                }
                ],
            });
        },
        customer_count(){
              this.common_count("/api/ecmcci","myChart1","CCI")
        },
        // 财政收入
        finance_count(){
             this.common_count("/api/ecmcfr","myChart2","财政收入")
        },
        //居民消费
        people_counts(){
             this.common_count("api/ecmcpi","myChart5","居民消费价格指数")
        },
        // 城镇
        city_count(){
             this.common_count("api/ecmfai","myChart6","城镇固定资产投资")
        },
        // 本外币存款
        code_count(){
             this.common_count("api/ecmfcd","myChart7","本外币存款")
        },
        //外商直接投资数据
        business_count(){
            this.common_count("api/ecmfdi","myChart8","外商直接投资数据")
        },
        // 外汇贷款数据
        loans_count(){
            this.common_count("api/ecmfeld","myChart9","外汇贷款数据")
        },
        //工业增加值增长
        product_progess_count(){
            this.common_count("api/ecmiip","myChart10","工业增加值增长")
        },
        //新增信贷数据
        credit_count(){
            this.common_count("api/ecmnacd","myChart11","新增信贷数据")
        },
        //工业品出厂价格指数
        out_product_count(){
           this.common_count("api/ecmppi","myChart12","工业品出厂价格指数")
        },
        //社会消费品零售总额
        socity_coume_count(){
            this.common_count("api/ecmtrsocg","myChart13","社会消费品零售总额")
            
        },
        // 海关
        async customers (){
        let customers_data = await this.$axios.get("/api/ecmciae")  
           this.customers_data = customers_data.data
            this.customers_data.forEach((v)=>{
                if(v[3]===1){
                    this.mamades.push(v[1])
                    this.nainaides.push(v[2])
                }else {
                    this.woods.push(v[2])
                }
           })
           this.chart5 = this.$echarts.init(document.getElementById("myChart4"))
           this.chart5.setOption({
                title: {
                    text: '海关进出口增减情况一览表',
                    itemGap:20,
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['进口','出口'],
                    right: '1%',
                    top:20,
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: this.mamades
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'进口',
                        type:'line',
                        stack: '总量',
                        data:this.nainaides,
                    },
                    {
                        name:'出口',
                        type:'line',
                        stack: '总量',
                        data:this.woods
                    },
                ]
           });
        },
        init() {
        const self = this;//因为箭头函数会改变this指向，指向windows。所以先把this保存
        window.onresize = function() {
            self.chart1.resize();
            self.chart2.resize();
            self.chart3.resize();
            self.chart4.resize()
        }
     }
     }
}
</script>
<style scoped>

</style>