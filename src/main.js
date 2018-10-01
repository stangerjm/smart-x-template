import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

require("smart-x-vue/src/styles/sass/base/_base.scss");
require("smart-x-vue");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch("people/fetchPeopleData");
    this.$store.dispatch("regions/fetchRegionData");
  }
}).$mount("#app");
