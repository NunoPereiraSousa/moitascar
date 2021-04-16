<template>
  <nav class="header flex flex-jc-sb flex-ai-c">
    <router-link :to="{ name: 'Home' }">
      <img class="hide-for-desktop" src="../assets/Logo2.png" alt="" />
    </router-link>
    <div class="header__hamburger hide-for-desktop" @click="toggleNavbar">
      <div class="header__hamburger__lines"></div>
      <div class="header__hamburger__lines"></div>
      <div class="header__hamburger__lines"></div>
    </div>
    <div class="header__mobile__menu hide-for-desktop">
      <div class="header__mobile__menu__links">
        <div class="header__mobile__menu__links__topics flex flex-ai-c">
          <h5>01</h5>
          <router-link :to="{ name: 'Home' }" @click.native="closeNavbar">
            <h3>Página inicial</h3>
          </router-link>
        </div>
        <div class="header__mobile__menu__links__topics flex flex-ai-c">
          <h5>02</h5>
          <router-link :to="{ name: 'Cars' }" @click.native="closeNavbar">
            <h3>Carros</h3>
          </router-link>
        </div>
        <div class="header__mobile__menu__links__topics flex flex-ai-c">
          <h5>03</h5>
          <router-link :to="{ name: 'About' }" @click.native="closeNavbar">
            <h3>Sobre nós</h3>
          </router-link>
        </div>
      </div>
      <div class="header__mobile__menu__extra">
        <div class="header__mobile__menu__extra__socials flex flex-ai-c">
          <div class="header__mobile__menu__extra__socials__line"></div>
          <h3>Facebook</h3>
          <h3>WhatsApp</h3>
        </div>
        <div class="header__mobile__menu__extra__policy flex flex-jc-c">
          <p>Privacy Policy & © Copy Right 2021</p>
        </div>
      </div>
    </div>
    <div class="header__desktop hide-for-mobile flex flex-ai-c flex-jc-sb">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/Logo2.png" alt="" />
      </router-link>
      <div class="flex">
        <div class="header__desktop__links flex flex-ai-c">
          <router-link :to="{ name: 'Home' }">
            <h3>Página inicial</h3>
          </router-link>
        </div>
        <div class="header__desktop__links flex flex-ai-c">
          <router-link :to="{ name: 'Cars' }">
            <h3>Carros</h3>
          </router-link>
        </div>
        <div class="header__desktop__links flex flex-ai-c">
          <router-link :to="{ name: 'About' }">
            <h3>Sobre nós</h3>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleNavbar() {
      let lines = document.querySelectorAll(".header__hamburger__lines");

      lines.forEach(line => {
        line.classList.toggle("open");
      });

      let header__mobile__menu = document.querySelector(
        ".header__mobile__menu"
      );

      header__mobile__menu.classList.toggle("open__overlay");

      document.body.classList.toggle("no_scroll");
    },
    closeNavbar() {
      let lines = document.querySelectorAll(".header__hamburger__lines");

      lines.forEach(line => {
        line.classList.toggle("open");
      });

      let header__mobile__menu = document.querySelector(
        ".header__mobile__menu"
      );

      header__mobile__menu.classList.toggle("open__overlay");

      document.body.classList.remove("no_scroll");
    }
  }
};
</script>

<style></style>
