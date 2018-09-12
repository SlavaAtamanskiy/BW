import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Catalogues from "./views/catalogues.vue";
import About from "./views/about.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/catalogues",
      component: Catalogues,
      children: [
        // route level code-splitting
        // this generates a separate chunk (path.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        { path: "", component: () => import("./views/catalogues/menu.vue") },
        {
          path: "books",
          name: "books",
          component: () => import("./views/catalogues/books.vue")
        },
        {
          path: "words",
          name: "words",
          component: () => import("./views/catalogues/words.vue")
        },
        {
          path: "users",
          name: "users",
          component: () => import("./views/catalogues/users.vue")
        }
        //{ path: '*', redirect: '/' },
        //{ path: '/catalogues', redirect: '/books'}
      ]
    }
  ]
});
