<template>
  <div class="cars_catalog__grid__card grid">
    <img :src="url" alt="Imagem Carro" />
    <div class="cars_catalog__grid__card__info">
      <div class="flex flex-ai-c flex-jc-sb">
        <h2>{{ brand }}, {{ model }}</h2>
        <h2>{{ formatCurrency(price) }}</h2>
      </div>
      <div
        class="cars_catalog__grid__card__info__details grid hide-for-desktop"
      >
        <p><i class="fas fa-road"></i>{{ formatKm(km) }}</p>
        <p><i class="fas fa-cogs"></i>{{ power }}cm<sup> 3</sup></p>
        <p><i class="far fa-calendar-alt"></i>{{ month }}, {{ year }}</p>
        <a href="https://www.facebook.com/Moitas2018/" target="_blank"
          ><i class="fab fa-facebook-square"></i>facebook</a
        >
      </div>
      <div class="cars_catalog__grid__card__info__details grid hide-for-phone">
        <div>
          <h4>Quilometragem</h4>
          <p>{{ formatKm(km) }}</p>
        </div>
        <div>
          <h4>Cilindrada</h4>
          <p>{{ power }}cm<sup> 3</sup></p>
        </div>
        <div>
          <h4>Ano e mês</h4>
          <p>{{ month }}, {{ year }}</p>
        </div>
        <div>
          <h4>Redes sociais</h4>
          <p><i class="fab fa-facebook-square"></i>facebook</p>
        </div>
      </div>
      <p id="extra"><b>Extras: </b>{{ extras }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarsCatalogCard",
  props: {
    url: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    km: {
      type: Number,
      required: true
    },
    power: {
      type: Number,
      required: true
    },
    extras: {
      type: String,
      required: true
    }
  },
  methods: {
    formatCurrency(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €`;
    },
    formatKm(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} km`;
    }
  }
};
</script>
