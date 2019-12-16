<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home">
                <template #tabBarItem-icon>
                    <img src="@/assets/img/tabBar/home.svg" alt="">
                </template>
                <template #tabBarItem-iconActive>
                    <img src="@/assets/img/tabBar/home_active.svg" alt="">
                </template>
                <template #tabBarItem-text>
                    <div>首页</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/sort">
                <template #tabBarItem-icon>
                    <img src="@/assets/img/tabBar/category.svg" alt="">
                </template>
                <template #tabBarItem-iconActive>
                    <img src="@/assets/img/tabBar/category_active.svg" alt="">
                </template>
                <template #tabBarItem-text>
                    <div>分类</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <template #tabBarItem-icon>
                    <img src="@/assets/img/tabBar/cart.svg" alt="">
                </template>
                <template #tabBarItem-iconActive>
                    <img src="@/assets/img/tabBar/cart_active.svg" alt="">
                </template>
                <template #tabBarItem-text>
                    <div>购物车</div>
                </template>
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <template #tabBarItem-icon>
                    <img src="@/assets/img/tabBar/profile.svg" alt="">
                </template>
                <template #tabBarItem-iconActive>
                    <img src="@/assets/img/tabBar/profile_active.svg" alt="">
                </template>
                <template #tabBarItem-text>
                    <div>我的</div>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar";
    import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components:{
            TabBarItem,TabBar
        }
    }
</script>

<style scoped>

</style>
