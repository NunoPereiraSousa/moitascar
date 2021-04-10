<template>
  <div>
    <div class="cars__grid__card show-above-phone" :id="card_id">
      <img :src="url" alt="carro" />
      <div class="cars__grid__card__info">
        <p><b>Preço:</b> {{ formatCurrency(price) }}</p>
        <p><b>Marca & modelo:</b> {{ brand }}, {{ model }}</p>

        <div class="flex flex-jc-sb flex-ai-c">
          <small>Publicado a {{ date }}</small>
          <button @click="expand(index)" v-on:click="show = !show">
            <div class="lines"></div>
            <div class="lines"></div>
          </button>
        </div>

        <div class="hide" v-if="show">
          <hr />
          <p><b>Ano: </b>{{ month }}, {{ year }}</p>
          <p><b>Total km: </b>{{ formatKm(km) }}</p>
          <p><b>Cilindrada: </b>{{ power }}</p>
          <p><b>Extras: </b>{{ extras }}</p>
        </div>
      </div>
    </div>
    <div class="cars__grid__card__large grid hide-for-phone">
      <img :src="url" alt="carro" />

      <div class="cars__grid__card__large__info">
        <h3>{{ brand }}, {{ model }}</h3>
        <div class="flex flex-ai-c flex-jc-sb">
          <p><i class="fas fa-road"></i>{{ formatKm(km) }}</p>
          <p><i class="fas fa-cogs"></i>{{ power }}cm<sup> 3</sup></p>
        </div>
        <p><i class="far fa-calendar-alt"></i>{{ month }}, {{ year }}</p>
        <p id="extra"><b>Extras: </b>{{ extras }}</p>
      </div>
      <button>{{ formatCurrency(price) }}</button>
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
    },
    index: {
      type: Number,
      required: true
    },
    card_id: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      show: false
    };
  },
  methods: {
    expand(index) {
      this.selectedItem = index;

      //   let card = document.querySelector(`#card_${index}`);

      let lines = document.querySelectorAll(`#card${index} .lines`);

      lines.forEach(line => {
        line.classList.toggle("minus");
      });

      console.log(index);
    },
    formatCurrency(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €`;
    },
    formatKm(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} km`;
    }
  }
};
</script>
