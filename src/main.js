import Vue from "vue";
import App from "./client/App.vue";
import router from "./client/router";
import { store } from './client/store/store';
import VModal from 'vue-js-modal';
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

export const bus = new Vue();

Vue.use(Vuetify, {
  theme:{
   primary: colors.blueGrey.darken1,
   secondary: colors.grey.darken1,
   accent: colors.green.base,
   error: colors.red.base,
   warning: colors.yellow.base,
   info: colors.blue.base,
   success: colors.green.base
 }
});
Vue.use(VModal);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

const vm = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

global.vm = vm;
