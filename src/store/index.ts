import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
import settings from './modules/settings'
Vue.use(Vuex);
// const files = require.context("./modules", false, /\.ts$/);
// interface Rules {
//   [key:string]:any
// }
// const modules:Rules = {};
//
// files.keys().forEach((key) => {
//   modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
// });
// console.log(modules)
// Object.keys(modules).forEach((key) => {
//   modules[key]["namespaced"] = true;
// });



const store = new Vuex.Store({
  modules:{
    settings
  },
  getters
});
export default store;
