import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', () => {
  const loadingState = ref(true)
  const lenguage = ref('en')
  const notify = ref({
    title: 'Success',
    message: 'All ok',
    state: 'success',
    show: false,
    temp: null
  })

  function load(state=null) {
    if(state!=null){
      loadingState.value = state
      return 0
    }
    loadingState.value = !loadingState.value
  }
    
  function changeLenguage(value, payload){
    lenguage.value = (value=='sp' || value=='en') ? value : 'sp';
    payload.locale = lenguage.value
  }

  function notification(_notify){
    notify.value = _notify
    notify.value.show = true
    notify.value.temp = setTimeout(()=>{
      notify.value.show = false
    },5000)
  }
  function hiddeNotify (){
    notify.value.temp = null
    notify.value.show = false
  }

  return {
      lenguage,
      changeLenguage,

      loadingState,
      load,

      notify,
      notification,
      hiddeNotify
  }
})
