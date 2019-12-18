<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
  import DetailNavBar from "./detaillChlidren/detailnavbar/DetailNavBar";
  export default {
    name: "Detail",
    components: {
      DetailNavBar
    },
    data(){
      return {
        iid: this.$route.params.iid
      }
    }
  }
</script>

<style scoped>

</style>
