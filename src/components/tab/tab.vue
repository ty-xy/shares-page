<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to= "/index">
      <span class="tab-link ">今日指数</span>
    </router-link>
    <router-link tag="div" class="tab-item" to= "/base">
      <span class="tab-link">沪深走势</span>
    </router-link>
  
    <router-link tag="div" class="tab-item" to= "/industry">
      <span class="tab-link">行业分析</span>
    </router-link>
    <router-link tag="div" class="tab-item" to= "/rank">
      <span class="tab-link">经济指标</span>
    </router-link>
      <router-link tag="div" class="tab-item" to= "/suggest">
      <span class="tab-link">个股推荐</span>
    </router-link>
    
  </div>
</template>
<script type="text/ecmascript-6">
  export default  {}
</script>
<style scoped >
.tab{
    display:flex;
    height:44px;
    line-height:44px;
    font-size: 14px;
}
.tab-item{
    flex:1;
    text-align:center;
}
.tab-link{
    padding-bottom:5px;

}
.router-link-active{
          color:red;
          /* color:  #DDE9FF; */
          /* border-bottom: 1px solid #DDE9FF; */
}
</style>
