<template>
  <div class="goods-info-list">
    <div v-for="good in goods" class="goods-info">
      <div class="shop-div">
        {{good.shopName}}
      </div>
      <div v-for="prodect in good.prodect" :key="prodect.iid">
        {{prodect.title}}<br>
        数量：
        <button @click="minus({iid: prodect.iid, shopId: prodect.shop.shopId})"> - </button>
        {{prodect.countInCart}}
        <button @click="add({iid: prodect.iid, shopId: prodect.shop.shopId})"> + </button>
        <br>
        价格： {{prodect.lowNowPrice}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartContext",
    props: {
      goods: {
        type: Array,
        default() {
          return {}
        }
      }
    },
    watch: {
      goods: {
        handler(n, o) {
          localStorage.setItem('cart', JSON.stringify(n));
        },
        deep: true
      }
    },
    methods: {
      minus(id){
        this.$store.commit('minus', id)
      },
      add(id){
        this.$store.commit('add', id)
      }
    }
  }
</script>

<style scoped>
  .shop-div {
    background-color: rgba(0, 255, 0, .3);
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
  .goods-info button {
    width: 15px;
    height: 20px;
  }
</style>
