//alert('hello')

window.Vue = require('vue');

// include vue-router
//import router from './routes';

import siteHeader from './components/Header.vue';
import siteMenu from './components/SiteMenu.vue';
import siteFooter from './components/SiteFooter.vue';
import sliderModal from './components/Modal.vue';
import index from './pages/Index.vue';

const app = new Vue({
    el: '#app',
    //router,

    components:{
        siteHeader,
        siteFooter,
        siteMenu,
        sliderModal,
        index
    },

});