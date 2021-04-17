<template>
  <div>
    <div class="add_car__overlay" @click="closeForm"></div>
    <div class="add_car flex flex-ai-c flex-jc-c">
      <form class="grid add_car__form">
        <div>
          <label for="brand">Marca</label> <br />
          <select id="brand">
            <option value="">Seleciona uma marca</option>
            <option value="brand">Mercedes</option>
          </select>
          <label for="price">Preço</label> <br />
          <input type="number" id="price" placeholder="Preço *" />
          <label for="facebook">Facebook</label> <br />
          <input type="url" id="facebook" placeholder="Link facebook *" />
        </div>
        <div>
          <label for="model">Modelo</label> <br />
          <select id="model">
            <option value="">Seleciona um modelo</option>
            <option value="model">SLK 299</option>
          </select>
          <label for="date">Data</label> <br />
          <input type="month" id="date" placeholder="Data *" />
          <label for="stand_virtual">Stand Virtual</label> <br />
          <input type="url" id="stand_virtual" placeholder="Stand virtual *" />
        </div>
        <div>
          <label for="km">Total km</label> <br />
          <input type="number" id="km" placeholder="Total km *" />
          <label for="power">Cilindrada</label> <br />
          <input type="number" id="power" placeholder="Cilindrada *" />
          <label for="image">Imagem</label> <br />
          <input type="url" id="image" placeholder="Imagem *" />
        </div>
        <div style="grid-area: 2 / 1 / 3 / 4;">
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

      document.body.classList.remove("no_scroll");
    }
  }
};
</script>
