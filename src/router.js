import Vue from "vue";
import Router from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";

Vue.use(Router);

const RouterLayout = createRouterLayout(layout => {
  return import("@/layouts/" + layout + ".vue");
});

const router = new Router({
  routes
})

let isAuthenticated = localStorage.getItem('isAuthenticated')
console.log(isAuthenticated);


router.beforeEach((to, from, next) => {
  if (to.path !== '/authorization' && !isAuthenticated) {
    console.log('Должен перейти к авторизации')
    next('/#/authorization')
  } else next()
})


// router.beforeEach((to, from, next) => {
//   let conditionToken = (to.path === '/home') || (to.path === '/home/authorization') || (to.path === '/home/createAccount');
//   let condition = (to.path !== '/home') || (to.path !== '/home/authorization') || (to.path !== '/home/createAccount');


//      if (store.getters.checkToken) {
//       if (conditionToken) {
//           next('/dashboard');
//           return;
//       } else {
//           next();
//           return;
//       }
//   }

//   condition ? next() : next('/home');
// });

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes
    }
  ]
});
