import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)

const state = {
  goodsList: JSON.parse(localStorage.getItem('cart')) || []
};

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {

    },
    getters
});

export default store
