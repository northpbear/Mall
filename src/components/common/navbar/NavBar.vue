<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
    <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    position: fixed;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.3);
  }
  .left, .right {
    text-align: center;
    margin-top: 6px;
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
</style>
