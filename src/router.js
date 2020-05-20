import Vue from "vue";
import Router from "vue-router";
//import router from "vue-auto-routing";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";
import store from '@/store'

Vue.use(Router);

const RouterLayout = createRouterLayout(layout => {
  return import("@/layouts/" + layout + ".vue");
});

// const router = new Router({
//   routes
// })

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes
    }
  ]
})

var isAuthenticated = localStorage.getItem('isAuthenticated');

let Autentication = !!localStorage.getItem('isAuthenticated')
console.log('Исходное состояние токена = ', Autentication)
console.log('Исходное значение токена = ', isAuthenticated)
console.log(isAuthenticated !== 1);

router.beforeEach((to, from, next) => {

  
  if (to.path !== '/authorization' && isAuthenticated != 1) next('/authorization')
  else if (to.path == '/authorization' && isAuthenticated == 1 ){next('/')}
  else next();
  
})

// router.beforeEach((to, from, next) => {

//   if (Autentication  && isAuthenticated !== 1) {
//     if(to.path !== '/authorization') {
//       console.log('Пиздуй авторизовываться')
//       next('/authorization')
//       return;
//     } else {
//       console.log('Пиздуй куда хочешь')
//         next();
//         return;
//     }
//   } console.log('Токену пизда', !Autentication, isAuthenticated)


// })


export default router


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





// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: "/",
//       component: RouterLayout,
//       children: routes
//     }
//   ]
// });
