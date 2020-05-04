<template>
  <div class="row container">
    <div class="info-block col xl12 l12 m12 s12 z-depth-1">
    <h3 class="info-block-title black-text">Заголовок</h3>

    <component v-bind:is="currentComponent"></component>
  </div>
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
     display: flex;
     margin-top: 100px;
  }
</style>

