<template>
    <div>
      <div id="myChart" :style="{width: width, height: height}"></div>
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
             width:"86%"
        }
     },
     mounted(){
         this.people_count()
     },
     methods:{
        async people_count (){
             let people_data = await this.$axios.get('/api/gdp')
             console.log(people_data)
        }
     }
}
</script>
<style scoped>

</style>