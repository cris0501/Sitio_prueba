<template>
  <div class="flex flex-col items-center min-h-screen py-28 px-10 space-y-5 bg">
    <p class="text-3xl text-center my-3 font-bold text-white"> {{ t('message.about.title') }} </p>
    <p class="text-justify text-white text-xl font-bold">
      {{ t('message.about.about1') }}
    </p>
    <div class="flex items-center lg:space-x-5">
      <div class="flex flex-col space-y-5 text-justify">
        <p class="text-white text-xl font-bold">
          {{ t('message.about.about2') }}
        </p>
        <p class="text-white text-xl font-bold">
          {{ t('message.about.about3') }}
        </p>
      </div>
      <img src="@/assets/images/tree.png" style="height:100%;width:auto;">
    </div>
    <p class="text-white text-2xl text-center font-bold">
      {{ t('message.about.spa') }}
    </p>
  </div>
  <div class="flex flex-col bg px-10 pb-20 text-right">
    <p class="text-lg font-bold text-white">
      C. Cristian Ramirez G.
    </p>
    <p class="text-sm text-white">
      Aspirante a desarrollador
    </p>
  </div>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<style>
</style>
