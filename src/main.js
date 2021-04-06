import Vue from "vue";
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueGlide);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
