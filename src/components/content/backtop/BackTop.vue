<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",

  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    z-index: 1000;
    right: 3vh;
    bottom: 10vh;
    height: 7vh;
    width: 7vh;
  }

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
