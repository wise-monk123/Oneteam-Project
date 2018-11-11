import api from '@/services/api';

const state = {
  authSuccess: false,
};

const mutations = {
  SET_AUTH_SUCCESS(state, value) {
    state.authSuccess = value;
  },
};

const actions = {
  socialAuth({ commit }) {
    return api.get({
      url: 'auth/google',
    }).then(() => {
      commit('SET_AUTH_SUCCESS', true);
    }).catch(() => {
      commit('SET_AUTH_SUCCESS', false);
    });
  },
};

const getters = {
  authSuccess: state => state.authSuccess,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
