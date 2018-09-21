<template>
    <div>
        <input type="text" @input="handleInput" placeholder="请输入内容...."/>
         <div>
            输入的内容是:{{message}}
        </div>
    </div>
   
</template>
<script>
export default {
     data(){
         return{
             message:''
         }
     },
     methods:{
          handleInput:function(e){
             this.message=e.target.value
          }
     }
}
</script>
<style scoped>

</style>


