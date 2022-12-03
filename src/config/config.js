import Vue from 'vue'
import App from '../App.vue'
import router from '../router'
import store from '../store'
import axios from "axios";
import AxiosUrl from "./AxiosUrl";
// 环境的切换
let URLPath
if (process.env.NODE_ENV == 'development') {
    URLPath = "DevelopmentHttpUrlConfig"

} else
if (process.env.NODE_ENV == 'debug') {
    URLPath = "DebugHttpUrlConfig"
} else if (process.env.NODE_ENV == 'production') {
    URLPath = "ProductionHttpUrlConfig"
}

console.log("URLPath", URLPath)
class Methods {
    GetConfig() {
        axios.get(URLPath + '/config.json')
            .then(res => {
                console.log("config---res", res)
                if (!!res.data.HomePageUrlPath) {
                    AxiosUrl.HomePageUrlPath = res.data.HomePageUrlPath
                    AxiosUrl.LoginPageUrlPath = res.data.LoginPageUrlPath
                    new Vue({
                        router,
                        store,
                        render: h => h(App)
                    }).$mount('#app')
                }

            })
        console.log("%c普通js获取getters里的值:", 'color: #43bb88;font-size: 24px;font-weight: bold;text-decoration: underline;', `${store.getters["HomePageModule/GetTestData"]}`)
        console.log("%c普通js获取state里的值:", 'color: red;font-size: 24px;font-weight: bold;text-decoration: underline;', `${store.state.HomePageModule.TestData}`)
    }




}
export default new Methods()