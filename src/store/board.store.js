import _ from 'lodash';
import api from '@/services/api';

const state = {
  items: [],
  nextId: 1,
  addItemSuccess: false,
  owner:''
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
  UPDATE_ITEM_STATUS(state, value) {
    Object.assign(state.items, value);
  },
};

const actions = {
  addItem({ commit, getters }, { text ,ownername}) {
    const newItem = {
      itemId: Math.floor(Math.random() * 10000),
      itemText: text,
      status: 'todo',
      owner:ownername
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
  updateItemsStatus({ commit, dispatch, getters }, { laneItems, status }) {
    const { items } = getters;
    const laneItemsClone = JSON.parse(JSON.stringify(laneItems));
    let target;

    _.each(items, (item) => {
      target = _.find(laneItemsClone, (laneItem) => {
        laneItem.status = status;

        return (
          item._id === laneItem._id &&
          item.status !== laneItem.status
        );
      });

      if (target) {
        commit('UPDATE_ITEM_STATUS', target);
        dispatch('updateTask', target);

        return;
      }
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
