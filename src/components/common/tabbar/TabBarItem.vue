<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="isActive" class="tab-bar-item-icon">
            <slot name="tabBarItem-iconActive"></slot>
        </div>
        <div v-else class="tab-bar-item-icon">
            <slot name="tabBarItem-icon"></slot>
        </div>
        <div class="tab-bar-item-text" :style="activeColor">
            <slot name="tabBarItem-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:{
                type: String,
                default: '/home'
            }
        },
        data(){
            return {

            }
        },
        methods: {
            itemClick(){
                this.$router.replace(this.path).catch(err => err);
            }
        },
        computed: {
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeColor(){
                return this.isActive ? {color: 'palevioletred'} : {}
            }
        }
    }
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
}
.tab-bar-item-icon img{
    margin-top: 3px;
    margin-bottom: 1px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
}
.tab-bar-item-text {
    font-weight: 800;
    font-size: 14px;
}
</style>