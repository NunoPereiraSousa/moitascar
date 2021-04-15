import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Cars from "../views/Cars.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sobre-nos",
    name: "About",
    component: About
  },
  {
    path: "/carros",
    name: "Cars",
    component: Cars
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
