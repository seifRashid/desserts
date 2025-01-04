<script setup>
import { useDessertsStore } from '@/stores/DessertStore';
import FoodItem from './foodItem.vue'

// import { computed } from 'vue';

// Access the Pinia store
const DessertsStore = useDessertsStore();

// Access the desserts array from the store reactively
const Desserts = DessertsStore.Desserts;
</script>
<template>
  <div class="md:w-full">
    <p class="text-2xl text-black font-bold py-4 mb-2 md:ml-12 lg:ml-6">Desserts</p>
    <div class="md:flex md:flex-wrap lg:flex-wrap lg:justify-even lg:gap-8 lg:mr-12 md:justify-around">
      <!-- Loop through the desserts array and pass props to the FoodItem component -->
      <FoodItem
        v-for="(item, index) in Desserts"
        :key="index"
        :id="item.name"
        :name="item.name"
        :price="item.price"
        :category="item.category"
        :image="item.image.desktop"
      />
    </div>
  </div>
</template> skyworth capital walfare

<style></style>
