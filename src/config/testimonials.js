import axios from "axios";
import { URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const testimonialsConfig = {
  getTestimonials: async () => {
    return await axios
      .get(`${URL}/testimonials`, headers)
      .then(response => {
        return {
          testimonials: response.data.processResult,
          status: response.status
        };
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
};
