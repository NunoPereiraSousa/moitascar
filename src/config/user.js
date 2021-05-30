import axios from "axios";
import { URL } from "./config";

let headers = {
  "Access-Control-Allow-Origin": "*"
};

export const userConfig = {
  login: async (username, password) => {
    console.log(username, password);
    return await axios
      .post(
        `${URL}/login`,
        {
          username: username,
          password: password
        },
        headers
      )
      .then(response => {
        console.log(response);
        return {
          token: response.data.processResult.token,
          loggedUser: response.data.processResult.username,
          resStatus: response.status
        };
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
};
