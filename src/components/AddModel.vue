<template>
  <div>
    <div class="add_model__overlay" @click="closeForm"></div>
    <div class="add_model flex flex-ai-c flex-jc-c">
      <form class="grid add_model__form">
        <div>
          <label for="modelInput">Modelo</label> <br />
          <input type="text" id="modelInput" placeholder="Modelo *" />
          <br /><br />
        </div>
        <input type="submit" value="Adicionar" id="addModelBtn" />
      </form>
      <div class="down flex flex-fd-c flex-jc-c">
        <hr />
        <button @click="closeForm">Voltar atrás</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddModel",
  methods: {
    closeForm() {
      let form = document.querySelector(".add_model");

      form.classList.toggle("open");

      let overlay = document.querySelector(".add_model__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
