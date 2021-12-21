import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

const loginSessionStorageKey = "login_data";

function getFromSessionStorage() {
  const s = sessionStorage.getItem(loginSessionStorageKey);
  if (_.isNil(s) || _.isEmpty(s))
    return {
      isLogin: false,
      userName: '',
      lastChangedTime: new Date(2021, 1, 1)
    };
  const v = JSON.parse(s);
  return v;
}

function setFromSessionStorage(state) {
  var s = JSON.stringify(state);
  sessionStorage.setItem(loginSessionStorageKey, s);
}

export default new Vuex.Store({
  state: getFromSessionStorage(),
  mutations: {
    login(state, userName) {
      state.isLogin = true;
      state.userName = userName;
      state.lastChangedTime = new Date();
      setFromSessionStorage(state);
    },
    logout(state) {
      state.isLogin = false;
      state.userName = '';
      state.lastChangedTime = new Date();
      setFromSessionStorage(state);
    },
    setLastTimeToNow(state) {
      state.lastChangedTime = new Date();
      setFromSessionStorage(state);
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
