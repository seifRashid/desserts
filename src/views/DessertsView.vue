<script setup>
import CartView from '@/components/CartView.vue';
import DessertsItems from '@/components/DessertsItems.vue';
import OrderConfirmedModal from '@/components/OrderConfirmedModal.vue';
import { useDessertsStore } from '@/stores/DessertStore';
// import { computed } from 'vue';

// Get the Pinia store
const DessertsStore = useDessertsStore();


// const isOrderConfirmed = computed(() => DessertsStore.OrderConfirmedModal);

</script>

<template>
  <div class="bg-greenHSL/5">
    <div id="blurContainer" :class="{ 'blur-sm': DessertsStore.OrderConfirmedModal }" class="sm:flex sm:flex-row lg:mx-12 m-2">
      <section class="flex items-center w-full justify-center md:w-full md:ml-16 md:w-2/3 lg:ml-12 lg:w-3/4">
          <DessertsItems />
      </section>
      <aside class="mt-10 w-full md:w-1/3 lg:w-1/4 lg:ml-0">
          <CartView />
      </aside>
    </div>
  </div>
  
  <!-- Use the store's state directly in v-show -->
  <div
    class="w-full h-screen fixed top-0 left-0 bg-black/70 flex items-center justify-center"
    v-show="DessertsStore.OrderConfirmedModal"
  >
    <div class="w-full mx-10 lg:w-1/3 h-auto">
      <OrderConfirmedModal/>
    </div>
  </div>
</template>

<style></style>
