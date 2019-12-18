<template>
  <div class="detail-center-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "DetailNavBarItem"
  }
</script>

<style scoped>
  .detail-center-item {
    flex: 1;
    color: var(--color-text);
    font-size: 13px;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
</style>
