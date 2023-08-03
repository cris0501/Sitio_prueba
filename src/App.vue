<script setup>
import { RouterLink, RouterView } from 'vue-router'
import notify from '@/components/notify.vue'
import lenguage from '@/components/lenguageProvider.vue'
</script>

<template>
  <notify />
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <!--<lenguage />-->
  </header>

  <RouterView />
</template>

<style scoped>
  header {
    @apply flex absolute top-0 left-0 w-full py-3 px-5;
    backdrop-filter: blur(5px);
  }
</style>
