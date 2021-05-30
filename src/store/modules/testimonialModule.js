import { testimonialsConfig } from "../../config/testimonials";

export const testimonialModule = {
  state: {
    testimonials: [],
    status: ""
  },
  mutations: {
    SET_TESTIMONIALS(state, payload) {
      state.testimonials = payload.testimonials;
      state.status = payload.status;
    }
  },
  actions: {
    async setTestimonials(state) {
      state.commit(
        "SET_TESTIMONIALS",
        await testimonialsConfig.getTestimonials()
      );
    }
  },
  getters: {
    getTestimonials: state => state.testimonials,
    getStatus: state => state.status
  }
};
