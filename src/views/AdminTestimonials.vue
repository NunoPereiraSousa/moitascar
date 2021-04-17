<template>
  <div class="admin_testimonials">
    <h1 class="admin_testimonials__title">Tem {{ n }} testemunhos.</h1>

    <div class="admin_testimonials__button">
      <button class="addTestimonialBtn" @click="openAddReviewForm">
        Adicionar Review
      </button>
    </div>

    <div class="admin_testimonials__grid grid">
      <TestimonialCardAdmin
        v-for="i in 6"
        :key="i"
        content="Honestidade e qualidade de serviço aliado a preços e condições muito competitivos."
        name="Neca Long"
        date="07/06/2019"
      />
    </div>
    <AddReview />
    <EditReview />
    <RemoveReview name="Neca Long" />
  </div>
</template>

<script>
import TestimonialCardAdmin from "@/components/TestimonialCardAdmin.vue";
import EditReview from "@/components/EditReview.vue";
import RemoveReview from "@/components/RemoveReview.vue";
import AddReview from "@/components/AddReview.vue";

export default {
  name: "AdminTestimonials",
  components: {
    TestimonialCardAdmin,
    AddReview,
    EditReview,
    RemoveReview
  },
  data: () => {
    return {
      n: 3
    };
  },
  methods: {
    openAddReviewForm() {
      let form = document.querySelector(".add_review");

      form.classList.toggle("open");

      let overlay = document.querySelector(".add_review__overlay");

      overlay.classList.toggle("open");
    }
  }
};
</script>
