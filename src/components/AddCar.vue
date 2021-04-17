<template>
  <div>
    <div class="add_car__overlay" @click="closeForm"></div>
    <div class="add_car flex flex-ai-c flex-jc-c">
      <form class="grid add_car__form">
        <div>
          <label for="brand">Marca</label> <br />
          <input type="text" id="brand" placeholder="Marca *" />
          <label for="model">Modelo</label> <br />
          <input type="text" id="model" placeholder="Modelo *" />
        </div>
        <div>
          <label for="price">Preço</label> <br />
          <input type="number" id="price" placeholder="Preço *" />
          <label for="km">Total km</label> <br />
          <input type="number" id="km" placeholder="Total km *" />
        </div>
        <div>
          <label for="date">Data</label> <br />
          <input type="month" id="date" placeholder="Data *" />
          <label for="power">Cilindrada</label> <br />
          <input type="number" id="power" placeholder="Cilindrada *" />
        </div>
        <div>
          <label for="image">Imagem</label> <br />
          <input type="url" id="image" placeholder="Imagem *" />
          <label for="extras">Extras</label> <br />
          <textarea id="extras" cols="30" rows="10" placeholder="Extras">
          </textarea>
        </div>
        <input type="submit" value="Adicionar" id="addCarBtn" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCar",
  methods: {
    closeForm() {
      let form = document.querySelector(".add_car");

      form.classList.toggle("open");

      let overlay = document.querySelector(".add_car__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
