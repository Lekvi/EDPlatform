import firebase from "firebase/app";


export default {
  state: {
    token: 0
  },
  getters: {
    checkToken(state) {
        return state.token
    }
  },
  mutations: {
    setActieveToken: (state) => {
      state.token = 1
      console.log('сработала мутация на 1')
    },
    setUnactiveToken: (state) => {
      state.token = 0
      console.log('сработала мутация на 0')
    }
  },
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        
        await firebase.auth().signInWithEmailAndPassword(email, password);
        //commit("setActieveToken");
        localStorage.setItem("isAuthenticated", 1);
        window.location.pathname = '/';
        console.log('успешно')

      } catch (e) {
        commit("setError", e); // заглушка для последующей обработки ошибок
        console.log('не успешно')
        throw e;
      }
    },
    async register({ dispatch, commit }, { email, password, name, surname }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            name: name,
            surname: surname
          });
      } catch (e) {
        commit("setError", e); // заглушка для последующей обработки ошибок
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currenUser;
      return user ? user.uid : null;
    },
    async logout() {
      await firebase.auth().signOut();
      window.location.pathname = '/authorization';
      //commit("setUnactiveToken");
    }
  }
};
