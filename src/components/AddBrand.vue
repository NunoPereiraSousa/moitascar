<template>
  <div>
    <div class="add_brand__overlay" @click="closeForm"></div>
    <div class="add_brand flex flex-ai-c flex-jc-c">
      <form class="grid add_brand__form">
        <div>
          <label for="brandInput">Marca</label> <br />
          <input type="text" id="brandInput" placeholder="Marca *" />
          <br /><br />
        </div>
        <input type="submit" value="Adicionar" id="addBrandBtn" />
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
  name: "AddBrand",
  methods: {
    closeForm() {
      let form = document.querySelector(".add_brand");

      form.classList.toggle("open");

      let overlay = document.querySelector(".add_brand__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
