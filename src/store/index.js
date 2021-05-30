import Vue from "vue";
import Vuex from "vuex";
import { testimonialModule } from "./modules/testimonialModule";
import { userModule } from "./modules/userModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    testimonialModule,
    userModule
  }
});
