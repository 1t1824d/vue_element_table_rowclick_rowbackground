import Vue from 'vue'
import './assets/iconfont/iconfont.css'
import './assets/fonts/DS-DIGI.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from "axios";
Vue.prototype.$axios = axios;
import configMethods from './config/config.js'
configMethods.GetConfig() //url接口初始化调用
import './mockserver/mockserver'  //js控制gif播放暂停插件不能与mockjs插件一起用

import { setTheme, themeList } from '@/themeConfig/setTheme.js' ///样式主题
if (!!window.localStorage.getItem('themeProperty')) {
    setTheme(window.localStorage.getItem('themeProperty'))
} else {
    setTheme("")
}

Vue.config.productionTip = false

