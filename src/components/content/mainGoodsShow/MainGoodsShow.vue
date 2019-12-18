<template>
  <div class="goods-show-list">
      <main-goods-show-item v-for="goodsList in goods" :goodsItem="goodsList"></main-goods-show-item>
  </div>
</template>

<script>
  import MainGoodsShowItem from "./MainGoodsShowItem";

  export default {
    name: "MainGoodsShow",
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      MainGoodsShowItem
    }
  }
</script>

<style scoped>
  .goods-show-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
