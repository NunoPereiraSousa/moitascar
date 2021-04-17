<template>
  <div>
    <div class="edit_car__overlay" @click="closeEditForm"></div>
    <div class="edit_car flex flex-ai-c flex-jc-c">
      <form class="grid edit_car__form">
        <div>
          <label for="brandEdit">Marca</label> <br />
          <select id="brandEdit">
            <option value="">Seleciona uma marca</option>
            <option value="brand">Mercedes</option>
          </select>
          <label for="priceEdit">Preço</label> <br />
          <input type="number" id="priceEdit" placeholder="Preço *" />
          <label for="facebookEdit">Facebook</label> <br />
          <input type="url" id="facebookEdit" placeholder="Link facebook *" />
        </div>
        <div>
          <label for="modelEdit">Modelo</label> <br />
          <select id="modelEdit">
            <option value="">Seleciona um modelo</option>
            <option value="model">SLK 299</option>
          </select>
          <label for="dateEdit">Data</label> <br />
          <input type="month" id="dateEdit" placeholder="Data *" />
          <label for="stand_virtual_edit">Stand Virtual</label> <br />
          <input
            type="url"
            id="stand_virtual_edit"
            placeholder="Stand virtual *"
          />
        </div>
        <div>
          <label for="kmEdit">Total km</label> <br />
          <input type="number" id="kmEdit" placeholder="Total km *" />
          <label for="powerEdit">Cilindrada</label> <br />
          <input type="number" id="powerEdit" placeholder="Cilindrada *" />
          <label for="imageEdit">Imagem</label> <br />
          <input type="url" id="imageEdit" placeholder="Imagem *" />
        </div>
        <div style="grid-area: 2 / 1 / 3 / 4;">
          <label for="extrasEdit">Extras</label> <br />
          <textarea id="extrasEdit" cols="30" rows="10" placeholder="Extras">
          </textarea>
        </div>
        <input type="submit" value="Adicionar" id="addCarBtn" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditCar",
  methods: {
    closeEditForm() {
      let form = document.querySelector(".edit_car");

      form.classList.toggle("open");

      let overlay = document.querySelector(".edit_car__overlay");

      overlay.classList.toggle("open");

      document.body.classList.remove("no_scroll");
    }
  }
};
</script>
