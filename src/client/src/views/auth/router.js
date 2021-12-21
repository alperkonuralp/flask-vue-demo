import AuthBase from "./AuthBase.vue";

//const routes = [
//  {
//    path: "/login",
//    name: "Login",
//    child
//    component: () =>
//      import(/* webpackChunkName: "NoAuth" */ "./LogIn.vue"),
//    // component: LogIn,
//  },
//  //{
//  //  path: "/demo",
//  //  name: "DemoPage",
//  //  // route level code-splitting
//  //  // this generates a separate chunk (about.[hash].js) for this route
//  //  // which is lazy-loaded when the route is visited.
//  //  component: () =>
//  //    import(/* webpackChunkName: "DemoPage" */ "../views/DemoPage.vue"),
//  //},
//];


const routes = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound.vue'),
  },
  {
    path: '/auth',
    component: AuthBase,
    meta: {
      title: 'Login',
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'Login',
        meta: {
          title: 'Login',
        },
        component: () => import('@/views/auth/Login.vue'),
      },
    ],
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found',
    },
    component: () => import('@/views/error/NotFound.vue'),
  },

  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error',
    },
    component: () => import('@/views/error/Error.vue'),
  },
];

export default { routes };
