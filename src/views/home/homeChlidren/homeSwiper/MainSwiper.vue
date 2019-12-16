<template>
  <div>
    <van-swipe :autoplay="3000" :indicator-color="'#D43E2E'">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="swiperimgs" v-lazy="image.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
    export default {
      name: "MainSwiper",
      props:{
        images: {
          type: Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .swiperimgs {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
