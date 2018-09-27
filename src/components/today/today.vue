<template> 
   <div>
       <div >
           <h2 style="color:rgb(255,256,127)">{{this.value[0]}}</h2>
           <div class="top-border">
                <div class="left-side">{{this.value[2]}}</div>
                <div class="right-side">
                    <!-- <div>{{this.value[1]}}</div> -->
                    <div>成交量:{{this.value[3]}}</div>
                    <div>成交额:{{this.value[4]}}</div>
                    <div>换手率:{{this.value[5]}}</div>
                </div>
           </div>
       </div>
       <div>
       <h2 style="color:rgb(255,256,127)">{{this.sValue[0]}}</h2>
           <div class="bottom-border top-border">
                <div class="left-side">{{this.sValue[2]}}</div>
                <div class="right-side">
                    <!-- <div>{{this.value[1]}}</div> -->
                    <div>成交量:{{this.sValue[3]}}</div>
                    <div>成交额:{{this.sValue[4]}}</div>
                    <div>换手率:{{this.sValue[5]}}</div>
                </div>
           </div>
           
       </div>
   </div>
  
</template>
 
<script>
import {API_HOST} from '../../util/config'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:[],
      sValue:[]
    }
  },
  mounted(){
     this.todayCount()
  },
  methods: {
      async todayCount(){
          const userdata = {
              name:"上证指数",
              begin_time:"2017-09-20",
              end_time:"2017-09-20"
          }
          const sData = {
              name:"深证成指",
               begin_time:"2017-09-20",
              end_time:"2017-09-20"
          }
          let username = await this.$axios.get('/api/hszs',{params:userdata})
          let sdata = await this.$axios.get('/api/hszs',{params:sData})
          this.value = username.data[0]
          this.sValue = sdata.data[0]
          console.log(this.value)
      },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.top-border,.bottom-border{
   height:180px;
   width:80%;
   margin-left:10%;
   border:1px solid rgb(69,39,39);
    margin-top:10px;
    display:flex;
}
ul {
  list-style-type: none;
  padding: 0;
}
.left-side{
    /* color:#00ff00; */
    color:red;
    height:130px;
    line-height:130px;
    border:1px solid;
    width:40%;
    font-weight:bold;
    font-size:24px;
    margin-right:10px;
}
.right-side>div{
    text-align:left;
    margin-top:10px;
    color:#cccc00

}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
