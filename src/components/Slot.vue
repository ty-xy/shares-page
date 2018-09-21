<template>
    <childCompontent>
        <!-- <input type="text" @input="handleInput" placeholder="请输入内容...."/>
         <div>
            输入的内容是:{{message}}
        </div> -->
        <h2 slot="header">标题</h2>
        <p>这是主体内容</p>
        <h2 slot="footer">footer</h2>
    </childCompontent>
   
</template>
<script>
import Vue from 'vue'
var childCompontent = Vue.component('childComponent',{
    template:'\
    <div class="container">\
       <div class="header">\
           <slot name="header"></slot>\
       </div>\
        <div class="main">\
           <slot></slot>\
       </div>\
        <div class="footer">\
           <slot name="footer"></slot>\
       </div>\
    </div>',
      mounted:function(){
         var header = this.$slots.header
         var footer = this.$slots.footer
         console.log(header,footer,this.$slots.default)
     }
})
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
     },
    components:{
        childCompontent
    }
}
</script>
<style scoped>

</style>


