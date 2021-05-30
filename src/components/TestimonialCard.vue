<template>
  <div class="testimonials__card">
    <h3>{{ name }}</h3>
    <div class="testimonials__card__text">
      <p>"{{ content }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    content: {
      required: true,
      type: String
    }
  }
};
</script>

<style></style>
