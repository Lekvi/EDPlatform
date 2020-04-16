import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

firebase.initializeApp({
  apiKey: "AIzaSyDQ116IdxgTd-BJGZUXlKntVZ7aUyZhbp0",
  authDomain: "iktplatform.firebaseapp.com",
  databaseURL: "https://iktplatform.firebaseio.com",
  projectId: "iktplatform",
  storageBucket: "iktplatform.appspot.com",
  messagingSenderId: "296230690633",
  appId: "1:296230690633:web:ff110ae06d6d0b2fdbc498",
  measurementId: "G-FRQ6K5CG0Y"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
