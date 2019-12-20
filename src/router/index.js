import Vue from 'vue';
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
const Sort = () => import('../views/sort/Sort');
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/sort',
    component: Sort
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

export default router
