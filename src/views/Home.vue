<template>
  <div class="home flex flex-ai-c flex-jc-c">
    <div class="scene"></div>
    <div class="overlay"></div>
    <div class="home__info">
      <h3>Stand automóvel.</h3>

      <hr />

      <p>O seu novo carro é especial.</p>

      <button>Sobre Nós</button>
    </div>
    <div class="home__scroll_down flex flex-fd-c flex-ai-c">
      <p>Scroll down</p>
      <i class="fas fa-chevron-down"></i>
    </div>
  </div>
</template>

<script>
import { background } from "../../js/background";

export default {
  name: "Home",
  mounted() {
    background();
  }
};
</script>
