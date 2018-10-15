<template> 
   <div>
           <div class="top-border" v-for="item in username" :key="item[0]">
                <div class="left-side">{{item[0]}}</div>
                <div class="right-side">
                   {{item[1]}}
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
      username:""
    }
  },
  mounted(){
     this.todayCount()
  },
  methods: {
      async todayCount(){
        //   const userdata = {
        //       name:"上证指数",
        //       begin_time:"2017-09-20",
        //       end_time:"2017-09-20"
        //   }
        //   const sData = {
        //       name:"深证成指",
        //        begin_time:"2017-09-20",
        //       end_time:"2017-09-20"
        //   }
          let data_success = await this.$axios.get('/api/tqindex')
           this.username = data_success.data
      },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.top-border{
   min-height:30px;
   width:86%;
   margin-left:7%;
   border:1px solid rgb(69,39,39);
    margin-top:10px;
    display:flex;
    padding:0 3px;
    justify-content: space-between;
    align-items: center
}
ul {
  list-style-type: none;
  padding: 0;
}
.left-side{
    /* color:#00ff00; */
     color:#cccc00;
    min-height:20px;
    line-height:20px;
    /* border:1px solid; */
    /* width:50%; */
    /* font-weight:bold; */
    font-size:16px;
    margin-right:10px;
}
.right-side{
    text-align:left;
    margin-top:10px;
  
     color:red;
     font-weight:bold;
     font-size: 20px
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
