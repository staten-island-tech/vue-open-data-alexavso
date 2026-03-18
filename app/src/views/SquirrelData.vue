<template>
    <div>
        <h2>{{ squirrel.unique_squirrel_id }}</h2>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const squirrel = ref(null)

async function getSquirrel(unique_squirrel_id) {
    console.log('did i run?')
    const response = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json/${unique_squirrel_id}`)
    const data = await response.json()
    squirrel.value = data
}
watch(
    () => route.params.unique_squirrel_id,
    function (unique_squirrel_id) {
        getSquirrel(unique_squirrel_id)
    },
)
onMounted(function() {
    getSquirrel(route.params.unique_squirrel_id)
})
</script>