<template>
  <div class="container card">
    <h3 class="black-text center-align">Входное тестирование</h3>

    <div class="row" v-for="task in tasks" :key="task.taskAnwser" style="margin-left:15%; margin-right:15%;">
      <div class="card ">
        <div class="card-content">
          <h4 class="card-title">
            Задание №{{task.taskname}}
          </h4>
          <p class="card-content">        
            {{ task.taskDescriptions}}
          </p>
          <form action="#">
            <p>
              <label>
                <input name="group1" type="text" placeholder="Введите ответ" v-model="task.UserAnswer"/>
              </label>
            </p>
          </form>
        </div>
      </div>
    </div>

    <div class="buttons">
        <button
          @click="submitData"
          class="submit-button btn btn-large blue waves-effect waves-light">
          Отправить
        </button>
        <router-link to="/">
          <button
            class="submit-button btn btn-large red waves-effect waves-light">
            Отмена
          </button>
        </router-link>
      </div>
  </div>
</template>

<script>
import tasks from '../mocks/tasks.js';
import AnswerStorage from '../AnswerStorage.js';

export default {
  data: function(){
    return {
      tasks: []
    }
  },
  created: function(){
    this.init();
  },
  methods: {
    init: function(){
      this.tasks = tasks.map(function(item){
        return{
          UserAnswer: '',
          taskDescriptions: item.taskDescriptions,
          taskname: item.taskname,
          taskAnswer: item.taskAnwser
        }
      })
    },
    submitData: function(){
      var complitedTasks = [];
      complitedTasks = this.tasks.map(function(task){
        return {
          taskname: task.taskname,
          taskAnswer: task.taskAnswer,
          UserAnswer: task.UserAnswer
        }
      });
      this.init();
      
      AnswerStorage.setAnswers(JSON.stringify(complitedTasks));
    }
  }
};
</script>

<style>
 .container {
  padding: 30px 0;
  border-radius: 20px;
}
/*
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
*/
.buttons {
  /* width: 800px;  */
  display: flex;
  justify-content: space-around;
}

.title {
  margin-bottom: 30px;
} 
</style>
