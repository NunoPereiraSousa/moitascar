<template>
  <section class="admin_landing hide-for-mobile">
    <h1 class="admin_landing__title">Tem {{ n }} veículos à venda.</h1>

    <div class="admin_landing__filters flex flex-ai-c flex-jc-sb">
      <div>
        <input type="text" id="carTxt" placeholder="Pesquisar carro" />
        <button class="filterBtn">
          Ordenar por preço <br />
          ++
        </button>
      </div>
      <button class="addBtn" @click="openForm">
        Adicionar carro
      </button>
    </div>

    <div class="admin_landing__cars grid">
      <CarsCardAdminCatalog
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
    <AddCar />
  </section>
</template>

<script>
import CarsCardAdminCatalog from "@/components/CarsCardAdminCatalog.vue";
import AddCar from "@/components/AddCar.vue";

export default {
  components: {
    CarsCardAdminCatalog,
    AddCar
  },
  name: "Admin",
  data: () => {
    return {
      n: 3
    };
  },
  methods: {
    openForm() {
      let form = document.querySelector(".add_car");

      form.classList.toggle("open");

      let overlay = document.querySelector(".add_car__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
