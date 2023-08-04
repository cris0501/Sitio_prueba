<template>
  <button class="flex justify-center items-center w-full text-white bg-blue-600 rounded-lg px-3 py-2">
    <p class="font-bold"> {{ props.text }} </p>
    <i class="ml-3 icon" :class="'icon-'+props.icon"></i>
  </button>
</template>

<script setup>
  const props = defineProps(['text', 'icon'])
</script>
