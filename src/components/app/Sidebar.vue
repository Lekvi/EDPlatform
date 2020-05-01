<template>
  <div class="sidebar col s3 z-depth-1">
    <ul class="sidebar-list black-text">
      <li><a href="#">Моя статистика</a></li>
      <li><a href="#">Мои рекомендации</a></li>
      <li>
        <a href="#" class="black-text" @click.prevent="logout">Выйти</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    dropdown: null
  }),
  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.push("/authorization?message=logout");
    }
  },
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    });
  },
  beforeDestroy() {
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
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
</style>
