/**
 * VueX模块的例子
 */
import VuexModule from "../VuexModule";


const HomePageModule = new VuexModule({
    getters: {
        GetTestData: state => state.TestData,
    },
    state: {
        TestData: "普通js获取getters里的值测试666666666666666666666666666666666",
    },
    mutations: {
        set_TestData: (state, data) => state.TestData = data,
    },

    actions: {
        async TestDatafun({
            commit
        }, data) {
            await commit('set_TestData', data);
        },
    },

});

export default HomePageModule;