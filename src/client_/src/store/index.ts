import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        userName: '',
        lastChangedTime: new Date(2021, 1, 1)
    },
    mutations: {
        login(state, userName) {
            state.isLogin = true;
            state.userName = userName;
            state.lastChangedTime = new Date();
        },
        logout(state) {
            state.isLogin = false;
            state.userName = '';
            state.lastChangedTime = new Date();
        },
        setLastTimeToNow(state) {
            state.lastChangedTime = new Date();
        }
    },
    actions: {
        login({ commit }, userName) {
            commit('login', userName);
        },
        logout({ commit }) {
            commit('logout');
        },
        setLastTimeToNow({ commit }) {
            commit('setLastTimeToNow');
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLogin;
        },
        userName(state) {
            return state.userName;
        }
    },
    modules: {},
});
