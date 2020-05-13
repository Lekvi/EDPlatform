<template>
  <div class="container card">
    <h3 class="black-text center-align">Входное тестирование</h3> 
    <div class="row">
        
      <div class="divider"></div>
      <div 
        class="card col xl7 l7 m7 s7 center-align"
      >
        <div class="card-content">
          <h4 class="card-title">Задание № {{}}</h4>
          <p class="card-content">Описание задания</p>
          <form action="#">
            <p>
              <label>
                <input name="group1" type="radio">
                <span>Вариант 1</span>
              </label>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .task-card {
    margin: 0 auto;
  }
</style>