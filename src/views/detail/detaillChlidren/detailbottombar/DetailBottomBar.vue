<template>
  <div class="detail-bottom">
    <div class="bottom-left">
      <div class="serve">
        <span class="serve-icon"></span>
        <span>客服</span>
      </div>
      <div class="shop">
        <span class="shop-icon"></span>
        <span>店铺</span>
      </div>
      <div class="fav" @click="changeIcon">
        <span class="fav-icon-active" v-if="isActive"></span>
        <span class="fav-icon" v-else></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="into-cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data(){
      return {
        isActive: false,
      }
    },
    methods: {
      addToCart(){
        return this.$emit('addCart')
      },
      changeIcon(){
        this.isActive = !this.isActive;
        console.log(this.isActive);
      },
    }
  }
</script>

<style scoped>
  .detail-bottom {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 10vh;
    z-index: 10;
  }
  .bottom-left div {
    flex: 1;
  }
  .bottom-left {
    flex: 1;
    display: flex;
  }
  .bottom-right {
    flex: 1;
    display: flex;
  }
  .bottom-right div {
    flex: 1;
    text-align: center;
    line-height: 10vh;
  }
  .into-cart {
    background-color: yellow;
    color: black;
  }
  .buy {
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .serve-icon {
    background: url('../../../../assets/img/detail/detail_bottom.png') no-repeat 0 -59px/100%;
    display: block;
    height: 25px;
    width: 25px;
    margin: 1vh auto 1vh;
  }
  .shop-icon {
    background: url('../../../../assets/img/detail/detail_bottom.png') no-repeat 0 -110px/100%;
    display: block;
    height: 25px;
    width: 25px;
    margin: 1vh auto 1vh;
  }
  .fav-icon {
    background: url('../../../../assets/img/detail/detail_bottom.png') no-repeat 0 0/100%;
    display: block;
    height: 25px;
    width: 25px;
    margin: 1vh auto 1vh;
  }
  .fav-icon-active {
    background: url('../../../../assets/img/detail/detail_bottom.png') no-repeat 0 -30px/100%;
    display: block;
    height: 25px;
    width: 25px;
    margin: 1vh auto 1vh;
  }

  .serve, .fav, .shop {
    text-align: center;
    font-size: 15px;
  }
</style>
