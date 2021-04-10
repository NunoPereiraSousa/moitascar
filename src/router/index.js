import Vue from "vue";
import VueRouter from "vue-router";
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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/carros",
    name: "Cars",
    component: Cars
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
