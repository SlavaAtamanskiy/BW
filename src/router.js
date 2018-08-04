import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/profile.vue";

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/about.vue")
    },
    {
      path: "/profile",
      component: Profile,
        children: [
        { path: '', component: () => import("./views/profile/menu.vue") },
        { path: "books", name: "books", component: () => import("./views/profile/books.vue") },
        { path: 'words', name: 'words', component: () => import("./views/profile/words.vue") },
        { path: 'users', name: 'users', component: () => import("./views/profile/users.vue") },
        //{ path: '*', redirect: '/' },
        //{ path: '/profile', redirect: '/books'}
      ]
    }
  ]
});
