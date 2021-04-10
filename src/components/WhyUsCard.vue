<template>
  <div class="about__reasons__grid__card">
    <img :src="url" alt="Icon" />
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "WhyUsCard",
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
};
</script>
