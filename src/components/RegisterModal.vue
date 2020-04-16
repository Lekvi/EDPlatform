<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Регистрация</span>
      <div class="input-field">
        <i class="material-icons prefix">person</i>
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >
          Введите ваше имя
        </small>
      </div>
      <div class="input-field">
        <i class="material-icons prefix">people</i>
        <input
          id="surname"
          type="text"
          v-model.trim="surname"
          :class="{ invalid: $v.surname.$dirty && !$v.surname.required }"
        />
        <label for="surname">Фамилия</label>
        <small
          class="helper-text invalid"
          v-if="$v.surname.$dirty && !$v.surname.required"
        >
          Введите вашу фамилию
        </small>
      </div>
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
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Поле Email не должно быть пустым</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите корретный Email</small
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
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть не менее 6 символов
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect blue waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/authorization">Войти</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "registration",
  data: () => ({
    email: "",
    password: "",
    name: "",
    surname: "",
    agree: false
  }),
  validations: {
    name: { required },
    surname: { required },
    email: { email, required },
    password: { required, minLength: minLength(6) },
    agree: { checked: v => v }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname
      };

      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
      } catch (e) {
        console.log("1");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.input-field input[type="text"]:focus + label,
.input-field input[type="password"]:focus + label,
.input-field input[type="email"]:focus + label,
.input-field .prefix.active {
  color: #448aff;
}
.input-field input[type="text"]:focus,
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
</style>
