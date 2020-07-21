import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './pages/Home.vue';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
    ],
    mode: "history",
    base: process.env.BASE_URL,
})