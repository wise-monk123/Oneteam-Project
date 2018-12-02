import api from '@/services/api';

const state = {
  users: [],
  currentUser: {},
  authSuccess: false,
  registerSuccess: false,
  loginState: '',
};

const mutations = {
  SET_AUTH_SUCCESS(state, value) {
    state.authSuccess = value;
  },
  SET_USER_PARAMS(state, value) {
    state.currentUser = value;
    state.users.push(value);
  },
  SET_REGISTER_SUCCESS(state, value) {
    state.registerSuccess = value;
  },
  SET_LOGIN_STATE(state, value) {
    state.loginState = value;
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
  submitRegisterForm({ commit }, requestParams) {
    commit('SET_USER_PARAMS', requestParams);
    commit('SET_LOGIN_STATE', 'NORMAL');
    return api.post({
      url: 'user/register',
      params: requestParams,
    }).then(() => {
      commit('SET_REGISTER_SUCCESS', true);
    });
  }
};

const getters = {
  authSuccess: state => state.authSuccess,
  registerSuccess: state => state.registerSuccess,
  currentUser: state => state.currentUser,
  loginState: state => state.loginState,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
