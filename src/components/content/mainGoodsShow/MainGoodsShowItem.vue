<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="itemImgLoad">
    <p>{{goodsItem.title}}</p>
    <div>
      <span class="price">{{goodsItem.price}}</span>
      <span>|{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainGoodsShowItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        },
      }
    },
    methods: {
      itemImgLoad() {
        this.$bus.$emit('itemImgLoaded');
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid);
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    height: auto;
  }

  .goods-item img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
  }

  .goods-item p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 13px;
  }

  .goods-item div {
    text-align: center;
  }

  .goods-item span {
    display: inline-block;
    font-size: 13px;
    margin: 5px 5px 8px 5px;
  }

  .price {
    color: var(--color-high-text);
  }
</style>
