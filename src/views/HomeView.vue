<script setup>
</script>

<template>
  <main class="flex justify-center items-center space-x-4 h-screen bg px-10">
    <div class="flex flex-col text-white w-2/3 lg:w-1/2 pl-5">
      <p class="font-bold text-6xl"> Prueba </p>
      <p class="font-bold text-6xl"> Practica </p>
      <p class="w-2/3 text-justify mt-5">
        La presente página web se crea como una prueba practica para la vacante de desarrollador web, particularmente para el apartado de frontend.
      </p>
    </div>
    <div class="flex justify-center w-1/3 lg:w-1/3">
      <img src="@/assets/images/rocket.svg">
    </div>
  </main>
  <div>
    
  </div>
</template>

<script setup>
  import api from '@/api'
  import { onMounted, ref } from 'vue'

  onMounted( async () => {
    const resp = await api({
      url: 'https://pokeapi.co/api/v2/pokemon/5',
      method: 'GET'
    })
    console.log(resp)
  })
</script>

<style scoped>
  .bg {
    background: url('@/assets/images/bg.webp');
  }
</style>
