import Vue from '../lib/vue/vue';
import VueRouter from '../lib/vue-router/vue-router';
import {mainBase} from './main/page_mainBase';
import {authorInfo} from './main/page_authorInfo';
import {login} from './left_example/page_login';
import {uploadImg} from './left_example/page_uploadImg';
import {carousel} from './left_example/page_carousel';
Vue.use(VueRouter);
//Router Set
export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',
            component: mainBase,
            children: [{
                path: 'authorInfo',
                component: authorInfo,
                name: 'authorInfo'
             }, {
                path: 'login',
                component: login,
                name: 'login'
             }, {
                path: 'uploadImg',
                component: uploadImg,
                name: 'uploadImg'
             }, {
                path: 'carousel',
                component: carousel,
                name: 'carousel'
             }, {
                path: '*',
                redirect: 'authorInfo'
             }]
        }
    ]
});
document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        router,
        template: `<router-view></router-view>`
    }).$mount('app');
});