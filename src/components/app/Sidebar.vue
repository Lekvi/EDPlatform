<template>
  <div class="sidebar col xl2 l2 m2 s2 z-depth-1">
    <ul class="sidebar-list black-text">
      <router-link 
        v-for="link in links"
        :key="link.url"
        class="black-text waves-effect" 
        tag="li"
        active-class="active"
        :to="link.url"
        exact
      >
        <a @click="chooseLink" >{{link.title}}</a>
      </router-link>
      <li>
        <router-link class="black-text" to="/authorization" @click.prevent="logout">Выйти</router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data: function() {
    return {
      links: [
      {title: 'Моя статистика', url: '/user/statistics'},
      {title: 'Мои рекомендации', url: '/user/recomendations'}
    ],
    currentTitle: "",
    
    }
  },
  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.push("/authorization?message=logout");
    },
    chooseLink: function() {
      console.log('test')
      console.log(this.links)

      //console.log(link.title)
      console.log(this.currentTitle)
      //this.$emit("showNewTitle", {currentTitle: this.link.title});
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
  justify-content: space-around;
  align-items: left;
  padding: 10px 20px;
  box-sizing: border-box;
}

.sidebar-list a {
  text-decoration: none;
  color: black;
}

.comp-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: 12px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.active {
  background: #e0e0e0;
}
</style>
