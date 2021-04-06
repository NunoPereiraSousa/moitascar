<template>
  <div class="testimonials__card">
    <div class="testimonials__card__text">
      <p>"{{ content }}"</p>
    </div>
    <h3>{{ name }}</h3>
    <h6>{{ date }}</h6>
  </div>
</template>

<script>
export default {
  props: ["name", "content", "date"]
};
</script>

<style></style>
