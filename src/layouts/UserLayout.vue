<template>
<div>
    <Navbar />
    <div class="row container">
      <div class="info-block col xl9 l9 m9 s9 z-depth-1">
        <h3 class="info-block-title black-text">Заголовок</h3>
        <router-view />    
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
// import Infoblock from "@/components/app/Infoblock";
// import Statistics from "@/components/Statistics";
// import Recommendations from "@/components/Recommendations";


export default {
  components: { 
    Navbar,
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
  .info-block {
    margin: 0 !important;
    padding: 25px !important;
    margin: 0;
    border-radius: 10px;
    min-height: 500px !important;
    box-sizing: border-box;
  }
  .info-block-title {
    margin: 0;
    color: black;
    font-size: 28px;
    font-weight: bold;
  }
</style>