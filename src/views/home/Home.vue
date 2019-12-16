<template>
  <div id="home">
    <nav-bar class="nav-bar-home">
      <template #center>购物街</template>
    </nav-bar>
    <div id="home-body">
      <main-swiper :images="banner"></main-swiper>
      <main-commend :commends="recommend"></main-commend>
      <tab-control class="tab-control-home" :titles="['流行','新款','精选']"></tab-control>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/common/tabcontrol/TabControl";

  import MainSwiper from "./homeChlidren/homeSwiper/MainSwiper";
  import MainCommend from "./homeChlidren/homeCommend/MainCommend";

  import {getHomeMultidata, getGoodsData} from "@/network/home";


  export default {
    name: "Home",
    data(){
      return {
        banner: [],
        recommend: [],
        keywords: [],
        dKeywords: [],
      }
    },
    components: {
      NavBar,
      MainSwiper,
      MainCommend,
      TabControl,
    },
    created() {
      this.getHomeMultidata();
      this.getGoodsData();
    },
    methods: {
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
          this.keywords = res.data.keywords.list;
          this.dKeywords = res.data.dKeyword.list;
        })
      },
      getGoodsData(){
        getGoodsData().then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .nav-bar-home {
    background-color: var(--color-tint);
    color: #ffffff;
    z-index: 999;
  }
  #home-body {
    padding-top: 44px;
  }
  .tab-control-home {
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
</style>
