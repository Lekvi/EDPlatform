<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <img src="#" class="logo" alt="logo" />
      <ul class="navbar-content black-text">
        <li><a class="black-text" href="#">ЕГЭ</a></li>
        <li><a class="black-text" href="#">ОГЭ</a></li>
        <li class="dropdown">
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            <span>Войти</span>
            <i class="material-icons right">arrow_drop_down</i>
          </a>
          <ul id="dropdown" class="dropdown-content">
            <li>
              <a href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-content {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-content {
  top: -65px;
  left: -30px;
}

.dropdown {
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
