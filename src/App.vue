<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header />
    <router-view class="main" />
    <div class="buttons">
      <div class="flex flex-ai-c flex-fd-c">
        <a href="mailto:moitascar24@gmail.com" class="flex flex-ai-c flex-jc-c"
          ><i class="fas fa-envelope"></i
        ></a>
        <a href="tel:+351917523009" class="flex flex-ai-c flex-jc-c"
          ><i class="fas fa-phone"></i
        ></a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  data: () => {
    return {
      previous__scroll__pos: null
    };
  },
  created() {
    this.previous__scroll__pos = window.pageYOffset;
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let height = document.querySelector(".header").clientHeight;

      let current__scroll__pos = window.pageYOffset;

      if (this.previous__scroll__pos > current__scroll__pos) {
        document.querySelector(".header").style.transition = "top 0.5s";
        document.querySelector(".header").style.top = "0px";
      } else {
        document.querySelector(".header").style.top = `-${height}px`;
      }
      this.previous__scroll__pos = current__scroll__pos;
    }
  }
};
</script>

<style lang="scss">
@import "../css/style.css";
</style>
