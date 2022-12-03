/**
 * Модуль роутера приложения
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import initListners from './initListners';
import listners from './listners';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/ztdada/home',
}, {
    path: '/ztdada/home',
    name: 'Home',
    component: () =>
        import ('@/views/Home/index'),
    meta: {
        Title: "首页",

    }
}, {
    path: '/ztdada/login',
    name: 'Login',
    component: () =>
        import ('@/views/Login/index'),
    meta: {
        Title: "登录",

    }

}, {
    path: '*',
    component: () =>
        import ('@/views/Error/index'),
    hidden: true
}];

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default initListners(router, listners);