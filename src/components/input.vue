<template>
  <div class="w-full relative">
    <input
      type="text"
      v-model="value"
      class="w-full rounded-lg px-3 py-3 outline-0"
      :placeholder="props.placeholder"
      @focus="show"
      @blur="blur"
      @keyup="change">
    <label v-show="state"> {{ props.label }} </label>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const props = defineProps(['placeholder', 'label'])
  const emit = defineEmits(['change'])
  const state = ref(false)
  const value = ref(null)

  function change(event){
    emit('change', value.value)
  }
  function show(){
    state.value = true
  }
  function blur(){
    if (value.value==null || value.value=='') state.value = false
  }
</script>

<style scoped>
  label {
    @apply absolute -top-4 left-1 bg-white px-2 pt-1 rounded-lg font-bold;
  }
</style>
