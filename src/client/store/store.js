import Vue from "vue";
import Vuex from "vuex";
import books from './modules/books';
import words from './modules/words';
import users from './modules/users';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    books,
    words,
    users
  }
})
