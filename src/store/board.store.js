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
};

const mutations = {};

const actions = {};

const getters = {
  todoItems: state => state.items.todo,
  inProgressItems: state => state.items.inProgress,
  doneItems: state => state.items.done,
};

export default {
  state,
  mutations,
  actions,
  getters,
};



// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(Vuex)
// Vue.use(VueAxios, axios)
// var responseItems = []
// var i = 0
// var todoDb = []
// var inProgressDb = []
// var doneDb = []
// axios.get('http://localhost:8081/items').then(function (response) {
//   console.log(response)
//   responseItems = response.data.items
//   for (i; i < responseItems.length; i++) {
//     if (responseItems[i].status === 'todo') {
//       console.log(responseItems[i])
//       todoDb.push(Object.assign({text: responseItems[i].text}, { id: responseItems[i].itemId }))
//     } else if (responseItems[i].status === 'inProgress') {
//       inProgressDb.push(Object.assign({text: responseItems[i].text}, { id: responseItems[i].itemId }))
//     } else if (responseItems[i].status === 'done') {
//       doneDb.push(Object.assign({text: responseItems[i].text}, { id: responseItems[i].itemId }))
//     }
//   }
// })
//
// export default new Vuex.Store({
//   state: {
//     items: {
//       todo: todoDb,
//       inProgress: inProgressDb,
//       done: doneDb
//     },
//     nextId: 1
//   },
//   mutations: {
//     addItem (state, item) {
//       state.nextId = Math.floor(Math.random() * 10000)
//       axios.post('http://localhost:8081/items', {itemId: state.nextId, itemText: item, status: 'todo'})
//       state.items.todo.push(Object.assign(item, { id: state.nextId }))
//       console.log(item)
//     },
//     updateItems (state, { items, id }) {
//       console.log('coming here', items, id)
//       state.items[id] = items
//     }
//   }
// })
