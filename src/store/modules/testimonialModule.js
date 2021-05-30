import { testimonialsConfig } from "../../config/testimonials";

export const testimonialModule = {
  state: {
    testimonials: []
  },
  mutations: {
    SET_TESTIMONIALS(state, payload) {
      state.testimonials = payload.testimonials;
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
    getTestimonials: state => state.testimonials
  }
};
