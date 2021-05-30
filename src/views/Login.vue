<template>
  <section class="login flex flex-ai-c flex-jc-c flex-fd-c">
    <h1>Autenticação MoitasCars</h1>
    <div class="login__form">
      <form @submit.prevent="signIn()">
        <label for="username">Nome de utilizador</label>
        <input
          type="text"
          id="username"
          v-model="login.username"
          placeholder="Nome de utilizador"
        />
        <br />
        <br />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="login.password"
          placeholder="Password"
        />
        <br />
        <br />
        <input type="submit" value="Login" id="loginBtn" />
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => {
    return {
      login: {
        username: "",
        password: ""
      },
      loggedUser: ""
    };
  },
  computed: {
    ...mapGetters(["getLoggedUser", "getStatus"])
  },
  methods: {
    async signIn() {
      this.$store.commit("SET_LOGIN_FORM", {
        username: this.login.username,
        password: this.login.password
      });

      console.log(this.login.username, this.login.password);

      try {
        await this.$store.dispatch("setLogin");

        let resStatus = this.getStatus;

        this.loggedUser = this.getLoggedUser;

        console.log(this.loggedUser);
        console.log(resStatus);
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
};
</script>

<style></style>
