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
  getWords ({ commit }) {
    axios.get(`${apiPrefix}/words`)
    .then( response => response.data )
    .then(items => {
        commit('setWords', items);
    })
    .catch((err)=>{
        console.log(err)
    });
  },
  createWord ({ commit }, payload) {
    axios.post(`${apiPrefix}/words`, payload.data)
    .then(res => { payload.callback(res, commit) })
    .catch((err) => {
       console.log(err)
    });
  },
  editWord ({ commit }, payload) {
    axios.put(`${apiPrefix}/words/${payload.data._id}`, payload.data)
    .then(res => { payload.callback(res, commit) })
    .catch((err)=>{
       console.log(err)
    });
  },
  deleteWord ({ commit }, id) {
    axios.delete(`${apiPrefix}/words/${id}`)
    .then(res => {
        if(res.status = 200){
          commit('deleteWord', id);
        }
    })
    .catch((err)=>{
        console.log(err)
    });
  },
}

// mutations
const mutations = {
  setWords (state, items) {
    state.all = items;
  },
  createWord (state, item) {
    state.all.push(item);
  },
  editWord (state, item) {
    let i = state.all.findIndex(itm => itm._id === item._id);
    if (i) state.all.splice(i, 1, item);
    //if (i) state.all[i] = {...item};
  },
  deleteWord (state, id) {
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
