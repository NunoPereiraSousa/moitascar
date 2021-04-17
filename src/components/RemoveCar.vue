<template>
  <div>
    <div class="remove_car__overlay" @click="closeRemovePopup"></div>

    <div class="remove_car">
      <h1 class="remove_car__title">
        Tem a certeza que quer remover o carro <br />
        <span>{{ car }}</span>
      </h1>

      <div class="remove_car__buttons flex flex-jc-c flex-ai-c">
        <button @click="removeCar">Sim</button>
        <button @click="closeRemovePopup">Não</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemoveCar",
  props: {
    car: {
      type: String,
      required: false
    }
  },
  methods: {
    removeCar() {},
    closeRemovePopup() {
      let form = document.querySelector(".remove_car");

      form.classList.toggle("open");

      let overlay = document.querySelector(".remove_car__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
