import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

// STORE MODULES
import auth from './modules/auth/auth';
import product from './modules/product/product';
import supplier from './modules/supplier/supplier';
import user from './modules/user/user';
import category from './modules/category/category';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
});

const store = new Vuex.Store({
    modules: {
        auth,
        product,
        supplier,
        user,
        category,
    },

    plugins: [vuexLocal.plugin],
})

export default store;