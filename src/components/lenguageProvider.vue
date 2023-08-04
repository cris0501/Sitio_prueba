<template>
        <button class="bg-blue-700 fixed bottom-10 left-3 rounded-full p-4"
            @click="changeLenguage($i18n)">
            <img :src="'/images/'+lenguage+'.png'" style="max-width: 30px;">
        </button>
</template>

<script setup>
    import { storeToRefs } from 'pinia'
    import { useSystemStore } from '@/stores/system.js' //../../

    const sysStore = useSystemStore()
    const { lenguage } = storeToRefs( sysStore )

    function changeLenguage(i18n){
        let value = (lenguage.value == 'es') ? 'en' : 'es'
        sysStore.changeLenguage(value, i18n)
    }

    defineExpose ({
        changeLenguage
    })
</script>
