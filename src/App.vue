<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ButtonComponent from './components/ButtonComponent.vue';
</script>

<template>
  <header>
    <nav class="w-full px-4 py-4 flex items-center justify-between">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />

      <div class="text-slate-700 font-semibold gap-8 flex">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/desserts">Desserts</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
      <div class="">
        <ButtonComponent name="Sign Up"/>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
