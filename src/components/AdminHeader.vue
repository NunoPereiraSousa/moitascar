<template>
  <header class="admin_navbar hide-for-mobile flex flex-ai-c flex-jc-sa">
    <router-link :to="{ name: 'Admin' }">
      <h3>Carros</h3>
    </router-link>
    <router-link :to="{ name: 'AdminTestimonials' }">
      <h3>Testemunhos</h3>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "AdminHeader"
};
</script>
