<template>
  <div>
    <div class="edit_review__overlay" @click="closeForm"></div>
    <div class="edit_review flex flex-ai-c flex-jc-c">
      <form class="grid edit_review__form">
        <label for="personaName">Nome do cliente</label> <br />
        <input type="text" id="personaName" placeholder="Nome do cliente" />
        <label for="reviewDate">Data da review</label> <br />
        <input type="date" id="reviewDate" placeholder="Data da review" />

        <label for="review">Extras</label> <br />
        <textarea id="review" cols="30" rows="6" placeholder="Review *">
        </textarea>
        <input type="submit" value="Editar" id="editReviewBtn" />
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
  name: "EditReview",
  methods: {
    closeForm() {
      let form = document.querySelector(".edit_review");

      form.classList.toggle("open");

      let overlay = document.querySelector(".edit_review__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
