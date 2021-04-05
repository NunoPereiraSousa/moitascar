<template>
  <div>
    <section class="home">
      <div class="scene"></div>
      <div class="overlay"></div>
      <div class="home__info">
        <h3>
          <div>Stand automóvel</div>
          <div>em Vila Nova de Gaia</div>
        </h3>

        <hr />

        <p>O seu novo carro é especial.</p>

        <!-- <button>Sobre Nós</button> -->
      </div>
      <div class="home__scroll_down flex flex-fd-c flex-ai-c">
        <p>Scroll down</p>
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>
    <section class="services">
      <div class="services__grid grid">
        <ServicesCard
          v-for="i in 4"
          :key="i"
          title="Venda de carros"
          content="Vendemos carros há mais de 26 anos."
        />
      </div>
    </section>
    <section class="cars">
      <div class="cars__grid grid">
        <CarsCard
          v-for="i in 4"
          :key="i"
          url="https://www.hyundai.com/content/hyundai/ww/data/news/data/2021/0000016609/image/newsroom-0112-photo-1-2021elantranline-1120x745.jpg"
          v-bind:price="50000"
          brand="Hyundai"
          model="Elantra"
          date="01/03/2021"
          month="janeiro"
          :year="2018"
          :km="15236"
          :power="123"
          extras="Colunas JBL, nitro e acentos estufados."
        />
      </div>
    </section>
  </div>
</template>

<script>
import { background } from "../../js/background";

import ServicesCard from "@/components/ServicesCard.vue";
import CarsCard from "@/components/CarsCard.vue";

export default {
  name: "Home",
  components: {
    ServicesCard,
    CarsCard
  },
  mounted() {
    background();
  }
};
</script>
