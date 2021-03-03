<template>
  <nav class="header flex flex-jc-sb flex-ai-c">
    <h2 class="header__title hide-for-desktop">Moitas Car</h2>
    <div class="header__hamburger hide-for-desktop" @click="toggleNavbar">
      <div class="header__hamburger__lines"></div>
      <div class="header__hamburger__lines"></div>
      <div class="header__hamburger__lines"></div>
    </div>
    <div class="header__mobile__menu hide-for-desktop">
      <div class="header__mobile__menu__links">
        <h3><span>01</span> Homepage</h3>
        <h3><span>02</span> Carros</h3>
        <h3><span>03</span> Sobre Nós</h3>
        <h3><span>04</span> Contactos</h3>
        <h3><span>05</span> Fale Connosco</h3>
      </div>
      <div class="header__mobile__menu__socials">
        <h3>Facebook</h3>
        <h3>WhatsApp</h3>
      </div>
      <div class="header__mobile__menu__policy">
        <p>Privacy Policy & © Copy Right 2021</p>
      </div>
    </div>
    <div class="header__desktop hide-for-mobile"></div>
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

      let title = document.querySelector(".header__title");
      title.classList.toggle("change__color");

      let header__mobile__menu = document.querySelector(
        ".header__mobile__menu"
      );

      header__mobile__menu.classList.toggle("open__overlay");
    }
  }
};
</script>

<style></style>
