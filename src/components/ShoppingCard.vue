<template>
  <div class="hello">
      <h1>这是购物车页面</h1>
      <table>
          <thead>
              <tr>
                  <th></th>
                  <th>商品名称</th>
                  <th>尚品单价</th>
                  <th>购买数量</th>
                  <th>操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, index) in list" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
                  <td>
                      <button @click= "handleReduce(index)"
                       :disabled="item.count === 1">-</button>
                      {{item.count}}
                      <button @click= "handleAdd(index)"
                       >+</button>
                  </td>
                  <td>移除</td>
              </tr>
          </tbody>
      </table>
      <div>商品总价:￥{{totalPrice}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        list:[
            {
            id:1,
            name:'iphone7',
            price:6188,
            count:1},
            {
            id:2,
            name:'iphone6',
            price:5188,
            count:1},
            {
            id:3,
            name:'iphone5',
            price:4188,
            count:2
            }
        ]
    }
  },
  methods:{
      handleReduce:function(index){
           if(this.list[index].count===1) return 
           this.list[index].count--;
      },
      handleAdd:function(index){
            this.list[index].count++;
      },
      handleRemove:function(){
            this.list.splice(index,1)
      }
  },
  computed:{
      totalPrice:function(){
          var total =0 ;
          for(var i = 0;i<this.list.length;i++){
              var item = this.list[i];
              total += item.price*item.count
          }
          return total.toString ().replace(/\B (?= (\d{3} )+$)/g,',');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
