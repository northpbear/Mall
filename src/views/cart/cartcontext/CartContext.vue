<template>
  <div class="goods-info-list">
    <div v-for="good in goods" class="goods-info">
      <div class="shop-div">
        {{good.shopName}}
      </div>
      <div v-for="prodect in good.prodect">
        {{prodect.title}}<br>
        数量： {{prodect.countInCart}}<br>
        价格： {{prodect.lowNowPrice}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartContext",
    props: {
      goods:{
        type: Array,
        default(){
          return {}
        }
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .shop-div {
    background-color: rgba(0,255,0,.3);
  }
  .goods-info-list {
    padding-top: 49px;
    padding-bottom: 49px;
    display: flex;
    flex-direction: column;
    width: 100vh;
  }
  .goods-info {
    width: 100vh;
    overflow: hidden;
    background-color: skyblue;
    margin-top: 10px;
  }
</style>
