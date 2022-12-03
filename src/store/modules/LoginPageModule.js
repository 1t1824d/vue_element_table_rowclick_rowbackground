/**
 * VueX模块的例子
 */


import VuexModule from "../VuexModule";


const LoginPageModule = new VuexModule({
    getters: {
        GetSettingsList: state => state.SettingsList,

    },
    state: {
        SettingsList: [],




    },
    mutations: {
        set_SettingsList: (state, data) => state.SettingsList = data,


    },

    actions: {
        async SettingsListfun({ commit }, data) {
            await commit('set_SettingsList', data);

        },

    },

});

export default LoginPageModule;