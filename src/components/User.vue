<template>
  <div class="row container">
    <Infoblock />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "@/components/app/Sidebar";
import Infoblock from "@/components/app/Infoblock";


export default {
  components: { 
    Infoblock,
    Sidebar
  }
}

</script>
<style scoped>
  .container {
     width: 85% !important;
     max-width: 1500px !important;
     display: flex;
     margin-top: 100px;
  }
 
</style>