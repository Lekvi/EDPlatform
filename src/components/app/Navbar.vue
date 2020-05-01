<template>
  <nav class="navbar blue lighten-1">
    <div class="nav-wrapper">
      <img src="#" alt="logo">
      <ul class="navbar-content black-text">
        <li><a href="#">ЕГЭ</a></li>
        <li><a href="#">ОГЭ</a></li>
            <li class="profile">
              <a href="User">
                Личный кабинет
              </a>
            </li>
          </ul>
    </div>
  </nav>
</template>

<style scoped>
.logo-box {
  width: 100px;
  height: 100px;
}

.logo {
  width: 100%;
  height: 100%;
}
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-content {
  margin: auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile {
  margin-left: auto;
}
</style>

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
