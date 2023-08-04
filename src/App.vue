<template>
  <notify />
  <header class="w-full">
      <nav class="flex justify-around w-full">
        <RouterLink to="/"> {{ t('message.routes.home') }} </RouterLink>
        <RouterLink to="/about"> {{ t('message.routes.about') }} </RouterLink>
      </nav>
  </header>

  <RouterView />

  <lenguage />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import notify from '@/components/notify.vue'
  import lenguage from '@/components/lenguageProvider.vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<style scoped>
  a {
    @apply text-white bg-green-600/80 px-4 py-2 rounded-lg;
  }

  header {
    @apply flex fixed top-0 left-0 w-full py-3 px-5 font-bold text-xl;
    backdrop-filter: blur(5px);
  }
</style>
