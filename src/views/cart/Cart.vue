<template>
  <div>
    <nav-bar>
      <template #center>
        购物车({{goodsCountInCart}})
      </template>
    </nav-bar>
    <cart-context :goods="goodsList">

    </cart-context>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartContext from "./cartcontext/CartContext";
  import {mapGetters, goodsList} from "vuex"

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartContext
    },
    computed: {
      ...mapGetters([
        'goodsCountInCart',
        'goodsList'
      ])
    },
  }
</script>

<style scoped>

</style>
