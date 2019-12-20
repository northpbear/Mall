<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <template #center>
        <div class="detail-center-inner">
          <detail-nav-bar-item class="center-inner-item"
                               v-for="(item, index) in itemList"
                               @click.native="changeActIndex(index)"
                               :class="{actived : index === activeIndex}">
            {{item}}
          </detail-nav-bar-item>
        </div>
      </template>
      <template #left>
        <div @click="goBack">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import DetailNavBarItem from "./DetailNavBarItem";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar,
      DetailNavBarItem
    },
    data(){
      return {
        activeIndex: 0,
        itemList: ['商品', '参数', '评论', '推荐']
      }
    },
    methods: {
      changeActIndex(index){
        this.activeIndex = index;
        console.log(index);
      },
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  #detail-nav-bar {
    position: relative;
    z-index: 10;
  }
  .detail-center-inner {
    display: flex;
  }
  .actived {
    color: var(--color-high-text);
  }
</style>
