<template>
  <div>
    <h2>Статистика</h2>
    <div class="chartWrapper">
      <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
    </div>
  </div>
</template>

<script>
import PieChart from "@/components/app/PieChart.js";
import AnswerStorage from '../../../AnswerStorage.js';


export default {
  name: "personal",
  layout: "UserLayout",
  components: {
    PieChart
  },
  data() {
    return {
      answers: [],
      countTrueAnswers: 0,
      countFalseAnswers: 0,
      chartOptions: {
        hoverBorderWidth: 4
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 2,
        labels: ["Правильно", "Неправильно"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [0,0]
          }
        ]
      }
    };
  },
  created: function(){
      this.init();
  },
  methods:{
    init: function(){
      console.log(AnswerStorage.getAnswers());

      AnswerStorage.getAnswers().map(function(item){
        if (item.UserAnswer == item.taskAnswer){
          this.countTrueAnswers+=1;
          console.log('countTrueAnswers ', this.countTrueAnswers)
        }
        else{
          this.countFalseAnswers+=1;
          console.log('countFalseAnswers ', this.countFalseAnswers)

        }
      }.bind(this));
      this.chartData.datasets[0].data[0] = this.countTrueAnswers;
      this.chartData.datasets[0].data[1] = this.countFalseAnswers;
    }
  }
}
</script>

<style scoped>
.chartWrapper {
  margin: 0 auto;
  max-width: 500px;
  max-height: 500px;
}
</style>