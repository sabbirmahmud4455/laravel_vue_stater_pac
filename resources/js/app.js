import Vue from 'vue'

//Main pages
import App from './view/main'

import router from './router'


const app = new Vue({
    el: '#app',
    components: { App },
	router
});