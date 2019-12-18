<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" @click="getIndex(index)">
      <span :class="{actived: actIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        actIndex: 0,

      }
    },
    methods: {
      getIndex(index){
        this.actIndex = index;
        this.$emit('changeTitle', index);
        console.log(index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span {
    height: 40px;
    width: 50px;
    display: block;
    text-align: center;
    margin: 0 auto;
  }
  .tab-control-item {
    flex: 1;
  }
  .actived {
    border-bottom: 3px solid var(--color-high-text);
    color: var(--color-high-text);
  }
</style>
