<template>
  <h1 class="subtitle">{{ title }}</h1>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
