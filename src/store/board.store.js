import api from '@/services/api';

const state = {
  items: {
    todo: [
      { itemId: '1', itemText: 'item', status: 'todo' },
      { itemId: '2', itemText: 'item', status: 'todo' },
    ],
    inProgress: [
      { itemId: '3', itemText: 'item', status: 'inProgress' },
      { itemId: '4', itemText: 'item', status: 'inProgress' },
    ],
    done: [
      { itemId: '5', itemText: 'item', status: 'done' },
      { itemId: '6', itemText: 'item', status: 'done' },
    ],
  },
  nextId: 1,
  addItemSuccess: false,
};

const mutations = {
  SET_ADD_ITEM_SUCCESS(state, value) {
    state.addItemSuccess = value;
  },
  UPDATE_TODO_ITEMS(state, value) {
    state.items.todo.push(value);
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
      commit('UPDATE_TODO_ITEMS', newItem);
      commit('SET_ADD_ITEM_SUCCESS', true);
    }).catch(() => {
      commit('SET_ADD_ITEM_SUCCESS', false);
    });
  },
};

const getters = {
  todoItems: state => state.items.todo,
  inProgressItems: state => state.items.inProgress,
  doneItems: state => state.items.done,
  addItemSuccess: state => state.addItemSuccess,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
