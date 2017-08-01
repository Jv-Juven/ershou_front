import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routers from './router'
// import Vuex from 'vuex'

// 设置网页的dpr
import LibFlexible from 'lib-flexible'

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Vuex);

var router = new VueRouter();

Routers(router);

router.start(App, '#app');
