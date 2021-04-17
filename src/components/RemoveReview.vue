<template>
  <div>
    <div class="remove_review__overlay" @click="closeRemoveReviewPopup"></div>

    <div class="remove_review">
      <h1 class="remove_review__title">
        Deseja remover a review de <br />
        <span>{{ name }}</span>
      </h1>

      <div class="remove_review__buttons flex flex-jc-c flex-ai-c">
        <button @click="removeReview">Sim</button>
        <button @click="closeRemoveReviewPopup">Não</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemoveReview",
  props: {
    name: {
      type: String,
      required: false
    }
  },
  methods: {
    removeReview() {
      this.closeRemoveReviewPopup();
    },
    closeRemoveReviewPopup() {
      let form = document.querySelector(".remove_review");

      form.classList.toggle("open");

      let overlay = document.querySelector(".remove_review__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
