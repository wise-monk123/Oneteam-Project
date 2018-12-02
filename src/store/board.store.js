import _ from 'lodash';
import api from '@/services/api';

const state = {
  items: [
    { itemId: '1', itemText: 'item', status: 'todo' },
    { itemId: '2', itemText: 'item', status: 'todo' },
    { itemId: '3', itemText: 'item', status: 'inProgress' },
    { itemId: '4', itemText: 'item', status: 'inProgress' },
    { itemId: '5', itemText: 'item', status: 'done' },
    { itemId: '6', itemText: 'item', status: 'done' },
  ],
  nextId: 1,
  addItemSuccess: false,
};

const mutations = {
  SET_ADD_ITEM_SUCCESS(state, value) {
    state.addItemSuccess = value;
  },
  ADD_TODO_ITEMS(state, value) {
    state.items.unshift(value);
  },
  SET_ITEMS(state, value) {
    state.items = value;
  },
};

const actions = {
  addItem({ commit, getters }, { text }) {
    const newItem = {
      itemId: Math.floor(Math.random() * 10000),
      itemText: text,
      status: 'todo',
    };

    return api.post({
      url: 'board/items',
      params: { ...newItem },
    }).then(() => {
      commit('ADD_TODO_ITEMS', newItem);
      commit('SET_ADD_ITEM_SUCCESS', true);
    }).catch(() => {
      commit('SET_ADD_ITEM_SUCCESS', false);
    });
  },
  fetchTasks({ commit }) {
    return api.get({
      url: 'board/items',
    }).then((response) => {
      commit('SET_ITEMS', response.data.items);
    });
  },
  updateTask(context, { _id, text, status }) {
    const params = {
      text,
      status,
    };

    return api.put({
      url: `board/items/${_id}`,
      params,
    });
  },
  deleteTask({ commit, dispatch }, { _id, status }) {
    return api.delete({
      url: `board/items/${_id}`,
    });
  },
};

const getters = {
  items: state => state.items,
  todoItems: state => _.filter(state.items, item => item.status === 'todo'),
  inProgressItems: state => _.filter(state.items, item => item.status === 'inProgress'),
  doneItems: state => _.filter(state.items, item => item.status === 'done'),
  addItemSuccess: state => state.addItemSuccess,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
