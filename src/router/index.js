import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Carousel from "../views/Carousel.vue";
import D3 from "../views/3D.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Carousel",
    name: "Carousel",
    component: Carousel,
  },
  {
    path: "/D3",
    name: "D3",
    component: D3,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Skip",
    name: "Skip",
    component: () =>
    import(/* webpackChunkName: "Skip" */ "../views/Skip.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/detail.vue"),
  },
  {
    path: "/List",
    name: "List",
    component: () =>
    import(/* webpackChunkName: "Skip" */ "../views/List.vue")
  },
  {
    path: "/Goods",
    name: "Goods",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/Goods.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
