<template>
  <div>
    <div class="add_review__overlay" @click="closeForm"></div>
    <div class="add_review flex flex-ai-c flex-jc-c">
      <form class="grid add_review__form">
        <label for="personaName">Nome do cliente</label> <br />
        <input type="text" id="personaName" placeholder="Nome do cliente" />
        <label for="reviewDate">Data da review</label> <br />
        <input type="date" id="reviewDate" placeholder="Data da review" />

        <label for="review">Extras</label> <br />
        <textarea id="review" cols="30" rows="6" placeholder="Review *">
        </textarea>
        <input type="submit" value="Adicionar" id="addReviewBtn" />
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
  name: "AddReview",
  methods: {
    closeForm() {
      let form = document.querySelector(".add_review");

      form.classList.toggle("open");

      let overlay = document.querySelector(".add_review__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
