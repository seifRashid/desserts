<script setup>
import HeroSection from '@/components/HeroSection.vue'

// import ButtonComponent from '@/components/ButtonComponent.vue'

// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- Landing page -->
    <HeroSection />
    <!-- Why choose us section -->
    <div class="flex flex-col items-center justify-center my-4">
      <h2 class="text-3xl font-bold text-center text-gray-900">
        Why
        <span class="text-orange-600">Choose Us</span>
      </h2>
      <div class="flex flex-col gap-4 w-full">
        <div class="flex w-full">
          <div class="w-full size-10">
            <svg
              fill="#000000"
              viewBox="0 0 24 24"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full size-10"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M23,11a1,1,0,0,0-1,1,10.034,10.034,0,1,1-2.9-7.021A.862.862,0,0,1,19,5H16a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V1a1,1,0,0,0-2,0V3.065A11.994,11.994,0,1,0,24,12,1,1,0,0,0,23,11Z M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z"
                ></path>
              </g>
            </svg>
          </div>
          <div class="m-2">Fast Delivery</div>
        </div>
      </div>
    </div>
  </main>
</template>
