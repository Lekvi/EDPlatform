<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Вход в систему</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            class="validate"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
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
        <a href="/">Зарегистрироваться</a>
      </p>
    </div>
  </form>
</template>

<style lang="less" scoped>
<<<<<<< Updated upstream
  .active {
    color: red;
=======
  .input-field input[type=text]:focus + label {
    color: #448AFF;
  }
  .input-field input[type=password]:focus + label {
    color: #448AFF;
  }
    .input-field input[type=text]:focus {
    border-bottom: 1px solid #448AFF;
    box-shadow: 0 1px 0 0 #448AFF;
  }
    .input-field input[type=password]:focus {
    border-bottom: 1px solid #448AFF;
    box-shadow: 0 1px 0 0 #448AFF;
>>>>>>> Stashed changes
  }
</style>
