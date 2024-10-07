<script setup>
import CartItem from './CartItem.vue'
import { useDessertsStore } from '@/stores/DessertStore'
// import { ref } from 'vue';

let DessertsStore = useDessertsStore()

// let OrderConfirmedModalShow = DessertsStore.OrderConfirmedModalshow();
// Assign the function from the store to be called later, not immediately
const toggleOrderModal = () => {
  DessertsStore.OrderConfirmedModalShow()
}

// const confirmOrder = () => {
//   alert('Hello There!');
// };
</script>
<template>
  <div class="flex flex-col items-start space-y-3 p-5 w-full h-auto bg-white rounded-md">
    <i class="fa-regular fa-circle-check text-green-600 text-2xl"></i>
    <p class="text-3xl font-bold text-redHSL-900 mb-2">Order Confirmed</p>
    <div class="overflow-scroll max-h-[200px] w-full">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
    <!-- Total Price -->
    <div class="flex w-full items-center justify-between">
      <p class="text-sm text-gray-500 font-semibold">Order Total</p>
      <p class="text-xl text-black font-bold">$40.50</p>
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
