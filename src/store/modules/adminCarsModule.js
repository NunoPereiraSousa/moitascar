import { adminCarsConfig } from "../../config/carsAdmin";

export const adminCarsModule = {
  state: {
    cars: [],
    status: ""
  },
  mutations: {
    SET_ADMIN_CARS(state, payload) {
      state.cars = payload.cars;
      state.status = payload.status;
    }
  },
  actions: {
    async setAdminCars(state) {
      state.commit("SET_ADMIN_CARS", await adminCarsConfig.getCars());
    }
  },
  getters: {
    getCars: state => state.cars,
    getResCarsStatus: state => state.status
  }
};
