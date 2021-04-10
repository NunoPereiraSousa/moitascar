<template>
  <div class="testimonials__card flex flex-fd-c">
    <h3>{{ name }}</h3>
    <h6>{{ date }}</h6>
    <div class="testimonials__card__text">
      <p>"{{ content }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "content", "date"]
};
</script>

<style></style>
