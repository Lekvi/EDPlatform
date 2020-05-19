<template>
  <div>
    <h2>Статистика</h2>
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import PieChart from "@/components/app/PieChart.js";

export default {
  name: "personal",
  layout: "UserLayout",
  components: {
    PieChart
  },
  data() {
    return {
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
            data: [5, 10]
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>