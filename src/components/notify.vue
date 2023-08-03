<template>
    <div class="notify flex" :class="bg" @click="sysStore.hiddeNotify" v-if="notify.show">
        <div class="flex items-center pa-2 text-white px-4" :class="bg_2">
          <i class="icon" :class="icon"></i>
        </div>
        <div class="flex flex-col justify-center py-4 py-1.5 text-white pl-3 pr-5">
            <p class="font-bold"> {{ notify.title }} </p>
            <div class="">
                {{ notify.message }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, watch, ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useSystemStore } from '@/stores/system.js'

    const sysStore = useSystemStore()
    const { notify } = storeToRefs(sysStore)

    const icon = computed(() => {
        if (notify.value.state == 'success'){
            return 'icon-ok';
        }
        else if (notify.value.state == 'error'){
            return 'icon-cross';
        }
        return 'icon-info'
    })
    const bg = computed(() => {
        if (notify.value.state == 'success'){
            return 'bg-green-600';
        }
        else if (notify.value.state == 'error'){
            return 'bg-red-600';
        }
        return 'bg-yellow-600'
    })
    const bg_2 = computed(() => {
        if (notify.value.state == 'success'){
            return 'bg-green-800';
        }
        else if (notify.value.state == 'error'){
            return 'bg-red-800';
        }
        return 'bg-yellow-800'
    })
</script>

<style scoped>
    .notify {
        position: fixed;
        top: 100px;
        right: 15px;
        z-index: 100;
        cursor: pointer;
    }
</style>
