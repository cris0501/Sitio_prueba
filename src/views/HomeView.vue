<template>
  <main class="flex flex-col lg:flex-row justify-center items-center space-x-4 h-screen bg px-10">
    <div class="flex flex-col text-white w-full md:w-2/3 lg:w-1/2 pl-5">
      <p class="font-bold text-6xl"> {{ t('message.home.title1') }} </p>
      <p class="font-bold text-6xl"> {{ t('message.home.title2') }} </p>
      <p class="w-full md:w-2/3 text-justify mt-5">
        {{ t('message.home.about') }}
      </p>
    </div>
    <div class="flex justify-center w-2/3 lg:w-1/3">
      <img src="@/assets/images/rocket.svg" class="mt-16 lg:mt-0">
    </div>
  </main>

  <div class="flex flex-col items-center bg-gray-600 px-10 py-16">
    <p class="text-white font-bold text-3xl mb-8 text-center"> {{ t('message.home.search') }} </p>

    <div class="flex flex-col lg:flex-row justify-center items-center w-full mx-auto" :class="{'lg:space-x-5':pokemon!=null}">
      <div class="flex flex-col items-center w-full lg:w-1/2" :class="{ 'mx-auto':pokemon==null }">
        <vinput placeholder="Pokemon" label="Pokemon" @change="changeInput"/>
        <div class="w-2/3 md:w-1/3 my-4">
          <btn :text="t('message.search')" :icon="icon" @click="searchPokemon" />
        </div>
        <p class="text-sm text-center text-white"> La conexion se hace con la API: <a href="https://pokeapi.co" target="_blank">https://pokeapi.co/</a></p>
      </div>
      <div v-if="pokemon!=null" class="flex flex-col items-center w-full lg:w-1/2 px-4 rounded-lg border-2 border-white">
        <div class="p-2">
          <p class="text-white text-xl font-bold"> {{ pokemon.name }} </p>
          <img :src="pokemon.image">
          <div class="flex space-x-3 my-2">
            <div class="bg-yellow-600 rounded-lg px-3 py-2" v-for="(item,index) of pokemon.types" :key="index+'.'+item.name">
              <p> {{ item.type.name }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col bg px-10 py-10 text-right">
    <p class="text-lg font-bold text-white">
      C. Cristian Ramirez G.
    </p>
    <p class="text-sm text-white">
      Aspirante a desarrollador
    </p>
  </div>
</template>

<script setup>
  import api from '@/api'
  import { onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import vinput from '@/components/input.vue'
  import btn from '@/components/btn.vue'
  import { useSystemStore } from '@/stores/system.js'

  const sysStore = useSystemStore()
  const { t } = useI18n()
  const search = ref(null)
  const pokemon = ref(null)
  const loading = ref(false)
  const icon = ref('ok')

  function changeInput (event){
    search.value = event
  }

  async function searchPokemon (){
    if (loading.value) return 0
    loading.value = true
    icon.value = 'cross'
    if (search.value!='' && search.value!=null){
      const { status, data } = await api({
        url: `https://pokeapi.co/api/v2/pokemon/${search.value}`,
        method: 'GET'
      })
      if (status == 200){
        pokemon.value = {
          name: data.name,
          image: data.sprites.front_default,
          types: data.types
        }
        sysStore.notification({
          title: 'Ok',
          message: t('message.success.ok'),
          state: 'success',
        })
      } else {
        pokemon.value = null
        sysStore.notification({
          title: 'Error',
          message: t('message.errors.notFound'),
          state: 'error',
        })
      }
    } else {
      pokemon.value = null
      sysStore.notification({
        title: t('message.alert'),
        message: t('message.alerts.fillData'),
        state: 'alert',
      })
    }
    loading.value = false
    icon.value = 'ok'
  }
</script>

<style>
  .bg {
    background: url('@/assets/images/bg.webp');
  }
</style>
