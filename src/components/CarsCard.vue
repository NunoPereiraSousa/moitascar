<template>
  <div class="cars__grid__card">
    <img :src="url" alt="carro" />
    <div class="cars__grid__card__info">
      <p><b>Preço:</b> {{ price }}€</p>
      <p><b>Marca & modelo:</b> {{ brand }}, {{ model }}</p>

      <div class="flex flex-jc-sb flex-ai-c">
        <small>Publicado a {{ date }}</small>
        <button>
          <div class="lines"></div>
          <div class="lines"></div>
        </button>
      </div>

      <div class="hide">
        <hr />
        <p><b>Ano: </b>{{ month }}, {{ year }}</p>
        <p><b>Total km: </b>{{ km }}km</p>
        <p><b>Cilindrada: </b>{{ power }}</p>
        <p><b>Extras: </b>{{ extras }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarsCard",
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
  }
};
</script>
