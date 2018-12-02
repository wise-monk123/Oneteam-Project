import Vue from 'vue';
import Vuex from 'vuex';

import loginStore from './login.store';
import boardStore from './board.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loginStore,
    boardStore,
  },
});
