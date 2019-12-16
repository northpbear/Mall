<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar",
        components:{
        }
    }
</script>

<style scoped>
#tab-bar {
    display: flex;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    height: 49px;
    box-shadow: 0px -2px 3px rgba(0,0,0,0.1);
}
</style>