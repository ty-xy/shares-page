<template>
    <div>
      <select v-model="selected">
        <option v-for="item in items" v-bind:value="item.value" :key="item">{{item}}</option>
     </select>
    </div>
</template>
<script>
export default {
     data(){
        return {
             items:[
                    "专用设备",
                    "交运物流",
                    "交运设备",
                    "仪器仪表",
                    "保险",   
                    "公用事业",
                    "农牧饲渔",
                    "农药兽药",
                    "券商信托",
                    "包装材料",
                    "化工行业",
                    "化纤行业",
                    "化肥行业",
                    "医疗行业",
                    "医药制造",
                    "商业百货",
                    "园林工"],
             selected:""
        }
     }
}
</script>
<style scoped>

</style>