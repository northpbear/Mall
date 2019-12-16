<template>
    <div class="commends">
      <div v-for="item in commends" class="commends-item">
        <a :href="item.link">
          <img :src="item.image" alt="" class="commendimgs">
        </a>
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "MainCommend",
    props: {
      commends: {
        type: Array,
        default(){
          return []
        }
      }

    }
  }
</script>

<style scoped>
  .commends {
    display: flex;
    padding-top: 1.5%;
    padding-bottom: 3%;
    border-bottom: 8px solid #eee;
  }
  .commends-item {
    flex: 1;
    text-align: center;
  }
  .commendimgs {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
  }
</style>
