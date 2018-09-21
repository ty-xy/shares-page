<template>
    <!-- vue的是异步更新的原理 -->
    <div>
        <div id="div" v-if="showDiv">这是一段文本</div>
        <button @click="getText">获取div的内容</button>
    </div>
  
</template>
<script>
export default {
     data(){
         return{
             showDiv:false
         }
     },
     methods:{
          getText:function(e){
             this.showDiv = true ;
            // 采用异步更新的原里
            //  var text = document.getElementById('div').innerHTML;
            //  console.log(text)
            // 用$nextTick
            this.$nextTick(function(){
                var text = document.getElementById('div').innerHTML;
                console.log(text)
            })
          }
     }
}
</script>
<style scoped>

</style>


