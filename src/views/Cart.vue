<template>
  <div>
      <div class="goods" v-for="(item,index) in cartArr" :key="index">
          {{item.title}}
          <div class="goodsRight">
              <i class="cubeic-remove" @click="removeCart(index)"></i>
              <span>{{item.cartCount}}</span>
              <i class="cubeic-add" @click="addCart(index)"></i>
          </div>
      </div>
      <cube-button style="margin:10px 0;">下单</cube-button>
      <cube-button @click="clearCart">清空购物车</cube-button>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
        return{
            //这里需要拿到物品后，再赋值
            // cartArr:[]
        }
    },
    computed: {
        ...mapState({
            cartArr:state=>state.cartArr
        }) 
    },
    methods:{

        //增加商品
        removeCart(index){
            this.cartArr


        },
        //减少商品
        addCart(index){

        },
        //清空购物车
        clearCart(index){

        }
    }
}
</script>

<style lang="stylus" scoped>
.goods
    padding 10px
    text-align left 
    .goodsRight
        float right
    i
        font-size 18px

</style>