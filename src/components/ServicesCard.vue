<template>
  <div class="services__grid__card">
    <h1>{{ title }}</h1>

    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "ServicesCard",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>
