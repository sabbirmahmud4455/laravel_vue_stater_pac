import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import page1 from './view/dashboard/page1'
import page2 from './view/dashboard/page2'


const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/page1',
            component: page1,
            name: 'page1',
        },{
            path: '/page2',
            component: page2,
            name: 'page2',
        }
        
    ]
});

export default routes;