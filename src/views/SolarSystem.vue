<script setup>
// import VCube from '@/components/ThreejsComponets/VCube.vue';
// import VHouse from '@/components/ThreejsComponets/VHouse.vue';
import SolarSystem from '@/components/ThreejsComponets/SolarSystem.vue';
// import VSphere from '@/components/ThreejsComponets/VSphere.vue';
// import VLine from '@/components/ThreejsComponets/VLine.vue';
// import VThreejsTest from '@/components/ThreejsComponets/VThreejsTest.vue';

</script>
<template>
  <div class="about">
    <h1>Planets around the sun</h1>
    <div class="three-elements">
      <!-- <VCube /> -->
      <!-- <VSphere /> -->
      <SolarSystem/>
       <!-- <VHouse/> -->
       <!-- <VThreejsTest/> -->
        <!-- <VLine/> -->
    </div>
  </div>
</template>

<style>
.about {
  text-align: center;
}

.three-elements {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
