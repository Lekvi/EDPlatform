<template>
  <div class="sidebar col xl2 l2 m2 s2 z-depth-1">
    <ul class="sidebar-list black-text">
      <router-link
        v-for="link in links"
        :key="link.url"
        class="black-text waves-effect sidebar-li"
        tag="li"
        active-class="active"
        :to="link.url"
        exact
      >
        <a @click="chooseLink">{{ link.title }}</a>
      </router-link>
      <li class="sidebar-li">
        <router-link class="black-text" to="/authorization">
          <a @click.prevent="logout">Выйти</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data: () => ({
    links: [
      { title: "Моя статистика", url: "/user/statistics" },
      { title: "Мои рекомендации", url: "/user/recomendations" }
    ],
    currentTitle: ""
  }),
  // data: function() {
  //   return {
  //     links: [
  //     {title: 'Моя статистика', url: '/user/statistics'},
  //     {title: 'Мои рекомендации', url: '/user/recomendations'},
  //   ],

  //   }
  // },
  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.push("/authorization?message=logout");
      console.log("Очистили");
      localStorage.removeItem("isAuthenticated");
      localStorage.setItem("isAuthenticated", 0)
      console.log(localStorage.getItem("isAuthenticated"));
    },
    chooseLink: function() {
      console.log("dsd");
      //console.log(this.currentTitle);
      //this.$emit("showNewTitle", { currentTitle: this.link.title });
    }
  }
};
</script>

<style scoped>
.sidebar {
  margin: 0;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
}

.sidebar-list {
  margin: 0;
  height: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  padding: 10px 20px;
  box-sizing: border-box;
}

.sidebar-list a {
  text-decoration: none;
  color: black;
}

.active {
  border-left: 2px solid red;
}

.sidebar-li {
  padding-left: 25px;
  margin-left: -32px;
  height: 50px;
  width: 195px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
}
</style>
