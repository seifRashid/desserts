<script setup>
import { ref, watch } from 'vue'
import { useDessertsStore } from '@/stores/DessertStore' // Import your Pinia store

// Import your Pinia store
const dessertsStore = useDessertsStore()

// Define a reactive variable for the count of this item
let singleItemCount = ref(0)

// Define an increment function
function incrementCount() {
  singleItemCount.value++
  console.log('Item count:', singleItemCount.value)
}

function decrementCount() {
  if (singleItemCount.value > 0) {
    singleItemCount.value--
    console.log('Item count:', singleItemCount.value)
  } else {
    !hideCartButton.value
  }
}
// Hide/Show cart button logic
let hideCartButton = ref(true)

// Get the props from the parent component
defineProps({
  name: String,
  category: String,
  price: Number,
  image: String,
  id: String
})

// Watch the singleItemCount value, and add the item to the cart when it changes
watch(singleItemCount, (newValue) => {
  console.log('Item added to cart')
  if (newValue > 0) {
    // Create the item object to be added to the cart
    const cartItem = {
      id: this.id, // The ID of the item
      name: this.name, // The name of the item
      count: newValue, // The number of items selected
      amount: this.price * newValue // The total price for the selected number of items
    }
    console.log('Object created')

    // Add or update the item in the cart
    dessertsStore.addToCart(cartItem)

  }
})
</script>

<template>
  <div class="flex flex-col mt-2 w-1/3 lg:w-1/4 mx-2">
    <!-- Image div with the absolute buttons -->
    <div class="relative w-[240px] h-[240px] bg-gray-200 cursor-pointer">
      <img
        class="w-full h-full object-cover rounded-md hover:border-2 border-redHSL"
        :src="image"
        :alt="name"
      />
      <!-- Cart button selected -->
      <div class="absolute -bottom-[20px]">
        <div
          class="flex gap-1 items-center justify-center bg-redHSL w-[140px] h-[40px] rounded-full mx-[50px]"
        >
          <div class="flex text-white items-center justify-between w-full px-4">
            <i class="fa-solid fa-circle-minus text-xl" @click.prevent="decrementCount"></i>
            <p>{{ singleItemCount }}</p>
            <i class="fa-solid fa-circle-plus text-xl" @click.prevent="incrementCount"></i>
          </div>
        </div>
      </div>
      <!-- Cart button -->
      <div
        class="absolute -bottom-[20px]"
        @click.prevent="hideCartButton = !hideCartButton"
        v-show="hideCartButton"
      >
        <div
          class="flex gap-1 items-center justify-center bg-white border-2 border-redHSL w-[140px] h-[40px] rounded-full mx-[50px]"
        >
          <img src="/assets/images/icon-add-to-cart.svg" alt="" />
          <p class="font-semibold">Add to cart</p>
        </div>
      </div>
    </div>
    <!-- Details div that will be a col with stacked infomations -->
    <div class="flex flex-col mt-8">
      <p class="text-sm text-gray-500">{{ name }}</p>
      <p class="font-bold">{{ category }}</p>
      <p class="text-redHSL font-semibold">$ {{ price }}</p>
    </div>
  </div>
</template>
