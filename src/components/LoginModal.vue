<template>
  <div class="main-container">
    <form class="card auth-card" @submit.prevent="submitHandler">
      <div class="logo-box">
        <img class="logo" src="@/assets/images/logo-blue.png" alt="logo" />
      </div>
      <h2 class="title blue-text">Подготовься к экзамену с нашей помошью!</h2>
      <div class="card-content">
        <span class="card-title">Вход в систему</span>
        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{
              invalid:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email)
            }"
          />
          <label for="email">Email</label>
          <small
            class="helper-text invalod"
            v-if="$v.email.$dirty && !$v.email.required"
            >Поле email не должно быть пустым</small
          >
          <small
            class="helper-text invalod"
            v-else-if="$v.email.$dirty && !$v.email.email"
            >Введите корректный email</small
          >
        </div>
        <div class="input-field">
          <i class="material-icons prefix">lock</i>
          <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{
              invalid:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength)
            }"
          />
          <label for="password">Пароль</label>
          <small
            class="helper-text invalod"
            v-if="$v.password.$dirty && !$v.password.required"
            >Введите пароль</small
          >
          <small
            class="helper-text invalod"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
            >Пароль должен быть не менее 6 символов</small
          >
        </div>
      </div>
      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light blue accent-2 auth-submit"
            type="submit"
          >
            Войти в систему
          </button>
        </div>
        <p class="center">
          Нет аккаунта?
          <router-link to="/registration">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "authorization",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
        console.log('Должны перейти к главную')
        //this.$router.push("/");
      } catch (e) {}
    }
  }
};
</script>

<style lang="less" scoped>
.main-container {
  display: flex;
  flex-direction: column;
}

.logo-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #fff;
  width: 500px;
  height: 80px;
}

.logo {
  width: 210px;
  height: 70px;
}

.title {
  text-align: center;
  font-size: 22px;
  line-height: 40px;
  font-weight: 300;
  margin: 0;
  border-bottom: 1px solid rgb(240, 240, 240);
}

.input-field input[type="password"]:focus + label,
.input-field input[type="email"]:focus + label,
.input-field .prefix.active {
  color: #448aff;
}
.input-field input[type="password"]:focus,
.input-field input[type="email"]:focus {
  border-bottom: 1px solid #448aff;
  box-shadow: 0 1px 0 0 #448aff;
}
p a {
  color: #448aff !important;
  font-weight: 500 !important;
}
p a:hover {
  color: #4b5cd7 !important;
  font-weight: 500 !important;
}

.card {
  margin: 0;
  height: 355px;
  width: 500px;
}
</style>
