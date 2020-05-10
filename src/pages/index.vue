<template>
  <div class="row container z-depth-1">
    <div class="title-box blue">
      <h1 class="title">
        Вас приветствует персональный помощник в подготовке к экзаменам ЕГЭ и
        ОГЭ
      </h1>
    </div>
    <div class="content">
      <h2 class="content-title">У нас вы найдете</h2>
      <div class="cards">
        <div class="card z-depth-1">
          <div class="card-icon">
            <img src="@/assets/images/test.svg" alt="test-icon" class="icon" />
          </div>
          <div class="card-text-block blue white-text">
            <p class="card-text">
              Постоянно поплняемую базу с тестовыми занданиями по предмету ИКТ,
              входящими в программу ЕГЭ и ОГЭ
            </p>
          </div>
        </div>
        <div class="card z-depth-1">
          <div class="card-icon">
            <img
              src="@/assets/images/teacher.svg"
              alt="teacher-icon"
              class="icon"
            />
          </div>
          <div class="card-text-block blue white-text">
            <p class="card-text">
              Возможность взаимодействия ученика с преподавателем, используя
              функционал платформы. Как никогда актуально в условиях карантина.
            </p>
          </div>
        </div>
        <div class="card z-depth-1">
          <div class="card-icon">
            <img
              src="@/assets/images/stats.svg"
              alt="stats-icon"
              class="icon"
            />
          </div>
          <div class="card-text-block blue white-text">
            <p class="card-text">
              Индивидуальную статистику с результатами пройденных заданий.
              Рекомендации на основе выбираемых тем и разделов.
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="first-test-button white-text z-depth-1 waves-effect waves-light"
      >
        Пройдите пробный тест
      </button>
    </div>
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import Infoblock from "@/components/app/Infoblock";

export default {
  name: "home",
  layout: "MainLayout",
  components: {
    Infoblock
  }
};
</script>

<style scoped>
.container {
  width: 85% !important;
  max-width: 1400px !important;
  margin-top: 100px;
  border-radius: 20px;
}

.title-box {
  height: 120px;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  padding-left: 25px;
  padding-top: 20px;
}

.title {
  margin: 0;
  max-width: 700px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 625px;
}

.content-title {
  margin: 0;
  font-size: 26px;
  font-weight: bold;
  color: #2196f3;
}

.cards {
  width: 1113px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.card {
  width: 250px;
  height: 350px;
  border-radius: 20px;
  margin: 0;
}

.first-test-button {
  width: 250px;
  height: 70px;
  background: #2196f3;
  border-radius: 20px;
  font-size: 18px;
  line-height: 28px;
  outline: none;
  border: none;
}

.first-test-button:hover {
  width: 270px;
}

.card-icon {
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.card-text-block {
  width: 250px;
  height: 200px;
  border-radius: 0px 0px 20px 20px;
  padding: 15px 20px;
}

.card-text {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
}
</style>
