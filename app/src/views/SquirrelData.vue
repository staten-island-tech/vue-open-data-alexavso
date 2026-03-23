<template>
  <div>
    <ul>
      <li v-for="item in squirrels" :key="item.unique_squirrel_id">
        {{ item.unique_squirrel_id }} - {{ item.primary_fur_color }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const squirrels = ref([])

onMounted(async () => {
  const res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=100')
  squirrels.value = await res.json()
})
</script>