<template>
  <div class="container card">
    <h3 class="black-text center-align">Входное тестирование</h3>
    <div class="row" v-for="task in tasks" :key="task.taskAnwser" style="margin-left:15%; margin-right:15%;">
      <div class="divider"></div>
      <div class="card ">
        <div class="card-content">
          <h4 class="card-title">
            <!-- Задание № 1 -->
            {{task.taskname}}
          </h4>
          <p class="card-content">
            <!-- Укажите количество целых десятичных чисел из диапазона от 10 до 20
            включительно, имеющих в своей двоичной записи более двух единиц. -->
            {{ task.taskDescriptions}}
          </p>
          <form action="#">
            <p>
              <label>
                <input name="group1" type="text" placeholder="Введите ответ"/>
              </label>
            </p>
          </form>
        </div>
      </div>
    </div>
    <div class="buttons">
        <button
          class="submit-button btn btn-large blue waves-effect waves-light">
          Отправить
        </button>
        <button
          class="submit-button btn btn-large red waves-effect waves-light">
          Отмена
        </button>
      </div>
  </div>
</template>

<script>
import tasks from '../mocks/tasks.js';

export default {
  data: function(){
    return {
      tasks: tasks
    }
  }
};
</script>

<style>
.container {
  padding: 30px 0;
  border-radius: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
.task-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 350px;
  padding: 15px 30px;
  margin-bottom: 30px;
  border-radius: 20px;
}

.task-title {
  margin: 0;
}

input:focus {
  border-bottom: 1px solid #2196f3 !important;
}

.btn {
  width: 220px;
  height: 60px;
  border-radius: 20px;
}

.buttons {
  /* width: 800px; */
  display: flex;
  justify-content: space-around;
}

.title {
  margin-bottom: 30px;
}
</style>
