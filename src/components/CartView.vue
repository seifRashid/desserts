<script setup>
import CartItem from './CartItem.vue'
import { useDessertsStore } from '@/stores/DessertStore';
// import { ref } from 'vue';

let DessertsStore = useDessertsStore()

// let OrderConfirmedModalShow = DessertsStore.OrderConfirmedModalshow();
// Assign the function from the store to be called later, not immediately
const toggleOrderModal = () => {
  DessertsStore.OrderConfirmedModalShow();
};

// const confirmOrder = () => {
//   alert('Hello There!');
// };
</script>
<template>
  <div class="flex flex-col items-start space-y-3 p-5 w-full h-auto bg-white rounded-md">
    <p class="text-2xl font-semibold text-redHSL mb-2">Your Cart (0)</p>
    <CartItem />
    <CartItem />
    <CartItem />
    <!-- Total Price -->
    <div class="flex w-full items-center justify-between">
      <p class="text-sm text-gray-500 font-semibold">Order Total</p>
      <p class="text-xl text-black font-bold">$40.50</p>
    </div>
    <!-- Carbon Neutral delivery -->
    <div class="flex w-full items-center justify-center bg-gray-200 rounded-md py-4 px-4">
      <p class="text-gray-500 text-sm">
        This is a <span class="text-black font-semibold">carbon-neutral</span> delivery
      </p>
    </div>
    <!-- Confirm order button -->
    <!-- <button class="bg-redHSL text-white font-semibold py-2 px-4 rounded-full w-full" @click="alert('Hello There!')">
            Confirm Order
          </button> -->
    <button
      class="bg-redHSL text-white font-semibold py-2 px-4 rounded-full w-full"
      @click="toggleOrderModal"
    >
      Confirm Order
    </button>
    <p>{{ DessertsStore.OrderConfirmedModal }}</p>
  </div>
</template>
<style></style>
