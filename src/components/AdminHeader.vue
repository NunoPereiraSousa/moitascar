<template>
  <div>
    <header class="admin_navbar hide-for-desktop flex flex-ai-c flex-jc-sb">
      <router-link :to="{ name: '' }">
        <h3>Carros</h3>
      </router-link>
      <router-link :to="{ name: '' }">
        <h3>Testemunhos</h3>
      </router-link>
    </header>
    <header class="admin_navbar hide-for-mobile flex flex-ai-c flex-jc-sa">
      <router-link :to="{ name: '' }">
        <h3>Carros</h3>
      </router-link>
      <router-link :to="{ name: '' }">
        <h3>Testemunhos</h3>
      </router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "AdminHeader"
};
</script>
