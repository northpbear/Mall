<template>
  <div>
    <div class="base-info">
      <span id="money-icon">￥</span>
      <div id="price">
        <p id="now-price">{{goods.lowNowPrice}}</p>
        <div id="desc">
          <s id="old-price">{{goods.oldPrice}}</s><br />
          <span id="discountDesc" v-show="goods.discountDesc">{{goods.discountDesc}}</span>
        </div>
      </div>
      <div id="title">{{goods.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseInfo",
    props: {
      goods: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin: 0 1vh;
  }
  #money-icon {
    position: absolute;
    margin-top: 1vh;
  }
  #price {
    position: relative;
    margin-top: 1vh;
    height: 7vh;
    margin-left: 2vh;
  }
  #now-price {
    display: inline-block;
    font-size: 7vh;
    top: -1vh;
    left: 2vh;
    color: black;
  }
  #desc {
    display: inline-block;
  }
  #old-price {
    font-size: 3vh;
    top: 0;
    left: 20.5vh;
    color: #999999;
  }
  #discountDesc {
    font-size: 2vh;
    top: 3vh;
    left: 20.5vh;
    background-color: var(--color-tint);
    padding: 0.1vh 0.7vh;
    border-radius: 0.5vh;
    color: #ffffff;
  }
  #title {
    font-size: 2.5vh;
    padding: 0 1vh;
  }
</style>
