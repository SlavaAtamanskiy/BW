import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { apiPrefix } from "@/config.json";

Vue.use(VueAxios, axios);

// initial state
const state = {
  all: [],
  search: ""
}

// getters
const getters = {
  filterList(state, val) {
    return state.all.filter(itm => itm.title.toLowerCase().match(val.toLowerCase()));
  }
}

// actions
const actions = {
  getBooks ({ commit }) {
    axios.get(`${apiPrefix}/books`)
    .then( response => response.data )
    .then(items => {
        commit('setBooks', items);
    })
    .catch((err)=>{
        console.log(err)
    });
  },
  createBook ({ commit }, payload) {
    axios.post(`${apiPrefix}/books`, payload.data)
    .then(res => { payload.callback(res, commit) })
    .catch((err) => {
       console.log(err)
    });
  },
  editBook ({ commit }, payload) {
    axios.put(`${apiPrefix}/books/${payload.data._id}`, payload.data)
    .then(res => { payload.callback(res, commit) })
    .catch((err)=>{
       console.log(err)
    });
  },
  deleteBook ({ commit }, id) {
    axios.delete(`${apiPrefix}/books/${id}`)
    .then(res => {
        if(res.status = 200){
          commit('deleteBook', id);
        }
    })
    .catch((err)=>{
        console.log(err)
    });
  },
}

// mutations
const mutations = {
  setBooks (state, items) {
    state.all = items;
  },
  createBook (state, item) {
    state.all.push(item);
  },
  editBook (state, item) {
    let i = state.all.findIndex(itm => itm._id === item._id);
    if (i) state.all.splice(i, 1, item);
    //if (i) state.all[i] = {...item};
  },
  deleteBook (state, id) {
    let i = state.all.findIndex(itm => itm._id === id);
    if (i) state.all.splice(i, 1);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
