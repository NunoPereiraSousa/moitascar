<template>
  <nav class="header flex flex-jc-sb flex-ai-c">
    <img class=" hide-for-desktop" src="../assets/Logo2.png" alt="" />
    <div class="header__hamburger hide-for-desktop" @click="toggleNavbar">
      <div class="header__hamburger__lines"></div>
      <div class="header__hamburger__lines"></div>
      <div class="header__hamburger__lines"></div>
    </div>
    <div class="header__mobile__menu hide-for-desktop">
      <div class="header__mobile__menu__links">
        <div class="header__mobile__menu__links__topics flex flex-ai-c">
          <h5>01</h5>
          <h3>Homepage</h3>
        </div>
        <div class="header__mobile__menu__links__topics flex flex-ai-c">
          <h5>02</h5>
          <h3>Carros</h3>
        </div>
        <div class="header__mobile__menu__links__topics flex flex-ai-c">
          <h5>03</h5>
          <h3>Sobre Nós</h3>
        </div>
        <div class="header__mobile__menu__links__topics flex flex-ai-c">
          <h5>04</h5>
          <h3>Contactos</h3>
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
      <img src="../assets/Logo2.png" alt="" />
      <div class="flex">
        <div class="header__desktop__links flex flex-ai-c">
          <h5>01</h5>
          <h3>Homepage</h3>
        </div>
        <div class="header__desktop__links flex flex-ai-c">
          <h5>02</h5>
          <h3>Carros</h3>
        </div>
        <div class="header__desktop__links flex flex-ai-c">
          <h5>03</h5>
          <h3>Sobre Nós</h3>
        </div>
        <div class="header__desktop__links flex flex-ai-c">
          <h5>04</h5>
          <h3 id="no_border">Contactos</h3>
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
    }
  }
};
</script>

<style></style>
