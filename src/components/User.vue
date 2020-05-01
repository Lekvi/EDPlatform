<template>
  <div class=" row container">
    <Infoblock />
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "@/components/app/Sidebar";
import Infoblock from "@/components/app/Infoblock";


export default {
  components: {
    Sidebar, 
    Infoblock
  }
}

</script>
<style scoped>
  .container {
     width: 85%;
     display: flex;
     margin-top: 100px;
  }
 
</style>
