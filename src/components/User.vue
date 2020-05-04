<template>
  <div class="row container">
    <Infoblock />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "@/components/app/Sidebar";
import Infoblock from "@/components/app/Infoblock";
// import Statistics from "@/components/Statistics";
// import Recommendations from "@/components/Recommendations";


export default {
  components: { 
    Infoblock,
    Sidebar
  }
}

</script>
<style>
  .container {
     width: 85% !important;
     max-width: 1400px !important;
     display: flex;
     margin-top: 100px;
  }
</style>