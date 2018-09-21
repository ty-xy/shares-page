<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to= "/index">
      <span class="tab-link">今日指数</span>
    </router-link>
    <router-link tag="div" class="tab-item" to= "/singer">
      <span class="tab-link">沪深走势</span>
    </router-link>
    <router-link tag="div" class="tab-item" to= "/rank">
      <span class="tab-link" >Pb-pe</span>
    </router-link>
    <router-link tag="div" class="tab-item" to= "/search">
      <span class="tab-link">行业分析</span>
    </router-link>
      <router-link tag="div" class="tab-item" to= "/search">
      <span class="tab-link">铂~金</span>
    </router-link>
      <router-link tag="div" class="tab-item" to= "/search">
      <span class="tab-link">黄~金</span>
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
.tab-link>.router-link-active>.tab-link{
          color:  #DDE9FF;
          border-bottom: 2px solid #DDE9FF;
}
         
 /* @import "~common/stylus/variable"
  .tab{
      display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;
  }
  
   
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme */
</style>
