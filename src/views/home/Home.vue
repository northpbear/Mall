<template>
  <div id="home">
    <nav-bar class="nav-bar-home">
      <template #center>购物街</template>
    </nav-bar>
    <tab-control class="tab-control-home"
                 :titles="['流行','新款','精选']"
                 v-show="isFixed"
                 :class="{fixed: isFixed}"
                 ref="tabControl1"
                 @changeTitle="changeTitle"></tab-control>
    <scroll class="wrapper"
            :pullup="pullup"
            :data="goods[activeTitle].data"
            :page="goods[activeTitle].page"
            :activeTitle="activeTitle"
            :listenScroll="true"
            :probeType="3"
            ref="scroll"
            @scroll="scroll"
            @scrollToEnd="pullUpGetGoodsData">
      <div id="home-body">
        <main-swiper :images="banner"></main-swiper>
        <main-commend :commends="recommend"></main-commend>
        <tab-control class="tab-control-home"
                     :titles="['流行','新款','精选']"
                     ref="tabControl2"
                     @changeTitle="changeTitle"></tab-control>
        <main-goods-show :goods="goods[activeTitle].data"></main-goods-show>
      </div>
      <div class="loading-wrapper"></div>
    </scroll>
    <back-top @click.native="backToTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/common/tabcontrol/TabControl";
  import MainGoodsShow from "@/components/content/mainGoodsShow/MainGoodsShow";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backtop/BackTop";

  import MainSwiper from "./homeChlidren/homeSwiper/MainSwiper";
  import MainCommend from "./homeChlidren/homeCommend/MainCommend";

  import {getHomeMultidata, getGoodsData} from "@/network/home";
  import {debounce} from "@/common/utils";


  export default {
    name: "Home",
    data(){
      return {
        banner: [],
        recommend: [],
        keywords: [],
        dKeywords: [],
        goods: {
          pop: {
            data: [],
            page: 1
          },
          sell: {
            data: [],
            page: 1
          },
          new: {
            data: [],
            page: 1
          },
        },
        activeTitle: 'pop',
        pullup: true,
        isShow:false,
        isFixed:false
      }
    },
    components: {
      NavBar,
      MainSwiper,
      MainCommend,
      TabControl,
      MainGoodsShow,
      Scroll,
      BackTop
    },
    created() {
      this.getHomeMultidata();
      this.getGoodsData('pop', this.goods.pop.page);
      this.getGoodsData('new', this.goods.new.page);
      this.getGoodsData('sell', this.goods.sell.page);
    },
    mounted() {
      const refresh = debounce(this.refresh, 100);
      this.$bus.$on('itemImgLoaded', () => {
        refresh();
      })
    },
    methods: {
      refresh(){
        if (this.$refs.scroll){
          console.log('...');
          this.$refs.scroll.scroll.refresh()
        }
      },
      scroll(pos){
        if (pos.y <= -1000){
          this.isShow = true
        }else{
          this.isShow = false
        }
        if (pos.y <= 44-this.$refs.tabControl2.$el.offsetTop){
          this.isFixed = true;
        }else{
          this.isFixed = false
        }
      },
      backToTop(){
        this.$refs.scroll.backToTop(0, 0);
      },
      changeTitle(index){
        switch (index) {
          case 0:
            this.activeTitle = 'pop';
            break;
          case 1:
            this.activeTitle = 'new';
            break;
          case 2:
            this.activeTitle = 'sell';
            break;
        }
        this.$refs.tabControl1.actIndex = index;
        this.$refs.tabControl2.actIndex = index;
      },

      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
          this.keywords = res.data.keywords.list;
          this.dKeywords = res.data.dKeyword.list;
        })
      },
      getGoodsData(type, page){
        getGoodsData(type, page).then(res => {
          // console.log(this.goods[type].data);
          this.goods[type].data.push(...res.data.list);
          this.goods[type].page++;
        })
      },
      pullUpGetGoodsData(type, page){
        this.getGoodsData(type, page);
        this.$refs.scroll.scroll.finishPullUp();
      }
    },
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
    background-color: #fff;
  }
  .wrapper {
    height: 100vh;
    position: relative;
  }
  .fixed {
    top: 43px;

    position: fixed;
    offset-top: 48px;
    z-index: 1000;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.3);
  }
</style>
