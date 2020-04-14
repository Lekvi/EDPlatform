<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Регистрация</span>
      <div class="input-field">
        <i class="material-icons prefix">person</i>
        <input
            id="name"
            type="text"
            class="validate"
        >
        <label for="name">Имя</label>
      </div>
      <div class="input-field">
        <i class="material-icons prefix">people</i>
        <input
            id="surname"
            type="text"
            class="validate"
        >
        <label for="name">Фамилия</label>
      </div>
      <div class="input-field">
        <i class="material-icons prefix">email</i>
        <input
            id="email"
            type="email"
        >
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <i class="material-icons prefix">lock</i>
        <input
            id="password"
            type="password"
            class="validate"
        >
        <label for="password">Пароль</label>
        
      </div>
      <p>
        <label>
          <input type="checkbox" />
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
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <a href="/authorization">Войти!</a>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: "registration"
};
</script>

<style lang="less" scoped>
   .input-field input[type=text]:focus + label, 
   .input-field input[type=password]:focus + label,
   .input-field input[type=email]:focus + label,
   .input-field .prefix.active {
    color: #448AFF;
  }
    .input-field input[type=text]:focus,
    .input-field input[type=password]:focus,
    .input-field input[type=email]:focus {
    border-bottom: 1px solid #448AFF;
    box-shadow: 0 1px 0 0 #448AFF;
  }
  p a {
    color: #448AFF !important;
    font-weight: 500 !important;
  }
  p a:hover {
    color: #4B5CD7 !important;
    font-weight: 500 !important;
  }

</style>

