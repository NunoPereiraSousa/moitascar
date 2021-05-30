import { userConfig } from "../../config/user";

export const userModule = {
  state: {
    loggedUser: "",
    token: "",
    resStatus: "",
    loginForm: {
      username: null,
      password: null
    }
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload.loggedUser;
      state.token = payload.token;
      state.resStatus = payload.resStatus;

      localStorage.setItem("token", JSON.stringify(payload.token));
      localStorage.setItem("loggedUser", JSON.stringify(payload.loggedUser));
    },
    SET_LOGIN_FORM(state, payload) {
      state.loginForm.username = payload.username;
      state.loginForm.password = payload.password;
    }
  },
  actions: {
    async setLogin(state) {
      state.commit(
        "SET_LOGGED_USER",
        await userConfig.login(
          state.state.loginForm.username,
          state.state.loginForm.password
        )
      );
    }
  },
  getters: {
    getUser: state => state.user,
    getLoggedUser: state => state.loggedUser,
    getToken: state => state.token,
    getResStatus: state => state.resStatus
  }
};
