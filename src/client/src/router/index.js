import Vue from "vue";
import VueRouter from "vue-router";
import AuthRoutes from "@/views/auth/router"
import Layout from "@/views/Layout.vue"
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  ...AuthRoutes.routes,
  {
    path: "/",
    name: "Default",
    component: Layout,
    meta: {
      title: 'home',
      icon: '',
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          icon: 'mdi-view-dashboard',
        },
        component: () => import('@/views/Home.vue'),
      },
    ]
  },
  //{
  //  path: "/demo",
  //  name: "DemoPage",
  //  // route level code-splitting
  //  // this generates a separate chunk (about.[hash].js) for this route
  //  // which is lazy-loaded when the route is visited.
  //  component: () =>
  //    import(/* webpackChunkName: "DemoPage" */ "../views/DemoPage.vue"),
  //},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



router.beforeEach((to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
  } else if (to.name !== 'Login') {
    next({
      name: 'Login',
      query: { returnUrl: to.fullPath }
    });
  } else {
    next();
  }
});

router.afterEach(() => {
  store.dispatch("setLastTimeToNow");
});

export default router;
