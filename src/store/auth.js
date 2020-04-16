import firebase from "firebase/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit("setError", e); // заглушка для последующей обработки ошибок
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
    }
  }
};
