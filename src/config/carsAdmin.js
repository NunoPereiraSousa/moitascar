import axios from "axios";
import { URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

let token = JSON.parse(localStorage.getItem("token"));
console.log(token);

export const adminCarsConfig = {
  getCars: async () => {
    return await axios
      .get(`${URL}/cars`, headers)
      .then(response => {
        console.log(response);
        return {
          cars: response.data.processResult,
          resStatus: response.status
        };
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
};
