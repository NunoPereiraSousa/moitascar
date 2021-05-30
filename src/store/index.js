import Vue from "vue";
import Vuex from "vuex";
import { adminCarsModule } from "./modules/adminCarsModule";
import { testimonialModule } from "./modules/testimonialModule";
import { userModule } from "./modules/userModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    adminCarsModule,
    testimonialModule,
    userModule
  }
});
