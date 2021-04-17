<template>
  <div class="admin_testimonials__card flex flex-fd-c">
    <h3>{{ name }}</h3>
    <h6>{{ date }}</h6>
    <div class="admin_testimonials__card__text">
      <p>"{{ content }}"</p>
    </div>
    <hr />
    <div class="admin_testimonials__card__buttons flex flex-ai-c flex-jc-sb">
      <button @click="openEditReview">
        <i class="fas fa-edit"></i> Editar
      </button>
      <button @click="openRemoveReviewPopup">
        <i class="far fa-trash-alt"></i> Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCardAdmin",
  props: ["name", "content", "date"],
  methods: {
    openEditReview() {
      let form = document.querySelector(".edit_review");

      form.classList.toggle("open");

      let overlay = document.querySelector(".edit_review__overlay");

      overlay.classList.toggle("open");
    },
    openRemoveReviewPopup() {
      let form = document.querySelector(".remove_review");

      form.classList.toggle("open");

      let overlay = document.querySelector(".remove_review__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>

<style></style>
