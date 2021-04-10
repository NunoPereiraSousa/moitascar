<template>
  <div class="cars_catalog">
    <h1 class="cars_catalog__title">Encontrámos {{ n }} veículos para si.</h1>

    <div class="cars_catalog__filters flex flex-ai-c">
      <input type="text" id="carTxt" placeholder="Pesquisar carro" />
      <button>
        Ordenar por preço <br />
        ++
      </button>
    </div>
    <div class="cars_catalog__grid grid">
      <CarsCatalogCard
        v-for="i in 3"
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
        extras="Colunas JBL, nitro e acentos estufados  nitro e acentos estufados."
      />
    </div>
    <div class="cars_catalog__buttons">
      <div class="flex flex-ai-c flex-fd-c">
        <a href="mailto:moitascar24@gmail.com" class="flex flex-ai-c flex-jc-c"
          ><i class="fas fa-envelope"></i
        ></a>
        <a href="tel:+351917523009" class="flex flex-ai-c flex-jc-c"
          ><i class="fas fa-phone"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import CarsCatalogCard from "@/components/CarsCatalogCard.vue";

export default {
  components: {
    CarsCatalogCard
  },
  data: () => {
    return {
      n: 6
    };
  }
};
</script>
