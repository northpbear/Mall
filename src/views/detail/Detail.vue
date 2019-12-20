<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :images="topImage" class="detail-swiper"></detail-swiper>
    <base-info :goods="goods"></base-info>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from "./detaillChlidren/detailnavbar/DetailNavBar";
  import DetailSwiper from "./detaillChlidren/detailSwiper/DetailSwiper";
  import BaseInfo from "./detaillChlidren/baseinfo/BaseInfo";
  import DetailBottomBar from "./detaillChlidren/detailbottombar/DetailBottomBar";

  import {getDetailData, Goods} from "@/network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      BaseInfo,
      DetailBottomBar
    },
    data(){
      return {
        iid: this.$route.params.iid,
        topImage:[],
        goods: {}
      }
    },
    created() {
      let detailData = null;
      getDetailData(this.iid).then((res)=>{
        detailData = res;
        this.topImage = detailData.result.itemInfo.topImages;
        this.goods = new Goods(res);
        console.log(this.goods);
      });

    },
    methods: {
      addCart(){
        this.$store.dispatch('addGoodsToCartOrCountAdd', this.goods);
        console.log(this.$store.state.goodsList);
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-swiper {
    padding-top: 44px;
  }
</style>
