<script setup>
// import ButtonComponent from '@/components/ButtonComponent.vue'

// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- Landing page -->
    <div class="relative h-screen bg-gray-800">
      <!-- Background Image -->
      <img
        src="\assets\images\landingPage.jpg"
        alt="Hero Background"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay (optional for darkening the background image) -->
      <div class="absolute inset-0 bg-black bg-opacity-80 sm:bg-opacity-50"></div>

      <!-- Content -->
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
      >
        <h1 class="text-4xl md:text-6xl font-bold drop-shadow-md">
          Craving Something Delicious? We've Got You Covered!
        </h1>
        <p class="mt-4 text-lg md:text-2xl mx-2 sm:mx-auto">
          Order your favorite meals from the best restaurants near you and get them delivered fresh
          and fast!
        </p>
        <!-- Search section -->
        <div
          class="flex gap-2 bg-orange-500/50 border border-orange-500 py-2 px-3 rounded-full w-[400px] mt-4"
        >
          <button>
            <!-- fontawesome search icon -->
            <i class="fa-solid fa-magnifying-glass text-xl text-white/50 hover:text-white"></i>
          </button>
          <input
            type="text"
            placeholder="Enter your delivery location."
            class="w-full bg-transparent placeholder:text-white/50 focus:outline-0"
          />
        </div>
        <!-- Call to action button -->
        <div
          class="flex gap-2 items-center py-2 px-4 text-white text-md font-semibold rounded-full bg-orange-500 hover:bg-orange-600 mt-8"
        >
          <RouterLink to="/desserts">Explore Menu</RouterLink>
          <!-- <ButtonComponent name="Order Now" link="" /> -->
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="size-8">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>food</title>
              <g id="food">
                <circle
                  cx="57.5"
                  cy="6.5"
                  r="2.5"
                  style="
                    fill: none;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></circle>
                <circle cx="24.5" cy="23.5" r="21.5" style="fill: #e5efef"></circle>
                <line
                  x1="22.837"
                  y1="6.663"
                  x2="19.163"
                  y2="10.337"
                  style="
                    fill: none;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></line>
                <line
                  x1="19.163"
                  y1="6.663"
                  x2="22.837"
                  y2="10.337"
                  style="
                    fill: none;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></line>
                <circle cx="17" cy="14" r="1" style="fill: #4c241d"></circle>
                <path
                  d="M8.756,34c2.173,11.259,8.827,20.117,17.276,23H22v3H42V57H37.968c8.449-2.883,15.1-11.741,17.276-23"
                  style="
                    fill: #ffffff;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></path>
                <circle
                  cx="25"
                  cy="25"
                  r="6"
                  style="
                    fill: #bf7e68;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></circle>
                <circle
                  cx="32.5"
                  cy="19.5"
                  r="7.5"
                  style="
                    fill: #f4aeab;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></circle>
                <circle
                  cx="40"
                  cy="25"
                  r="6"
                  style="
                    fill: #e2e2e2;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></circle>
                <path
                  d="M25,31a6,6,0,0,0-12,0Z"
                  style="
                    fill: #77a052;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></path>
                <path
                  d="M38,31a6,6,0,0,0-12,0Z"
                  style="
                    fill: #ffce56;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></path>
                <path
                  d="M51,31a6,6,0,0,0-12,0Z"
                  style="
                    fill: #816982;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></path>
                <path
                  d="M61,60a6,6,0,0,0-12,0Z"
                  style="
                    fill: #e66353;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></path>
                <polygon
                  points="27.771 40.271 30.378 40.554 32.021 38.51 33.664 40.554 36.271 40.271 35.987 42.878 38.031 44.521 35.987 46.164 36.271 48.771 33.664 48.487 32.021 50.531 30.378 48.487 27.771 48.771 28.054 46.164 26.01 44.521 28.054 42.878 27.771 40.271"
                  style="
                    fill: #ffce56;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></polygon>
                <path
                  d="M14.78,34H8.5A1.5,1.5,0,0,1,7,32.5H7A1.5,1.5,0,0,1,8.5,31h47A1.5,1.5,0,0,1,57,32.5h0A1.5,1.5,0,0,1,55.5,34H22"
                  style="
                    fill: #ffffff;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></path>
                <line
                  x1="26"
                  y1="57"
                  x2="31"
                  y2="57"
                  style="
                    fill: none;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></line>
                <line
                  x1="60"
                  y1="60"
                  x2="5"
                  y2="60"
                  style="
                    fill: none;
                    stroke: #4c241d;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                  "
                ></line>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </main>
</template>
