<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Вход в систему</span>
      <div class="input-field">
        <i class="material-icons prefix">email</i>
        <input
            id="email"
            type="email"
            class="validate"
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
        <a href="/registration">Зарегистрироваться</a>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: "login"
};
</script>
<style lang="less" scoped>
   .input-field input[type=password]:focus + label,
   .input-field input[type=email]:focus + label,
   .input-field .prefix.active {
    color: #448AFF;
  }
    .input-field input[type=password]:focus,
    .input-field input[type=email]:focus {
    border-bottom: 1px solid #448AFF;
    box-shadow: 0 1px 0 0 #448AFF;
  }
</style>
