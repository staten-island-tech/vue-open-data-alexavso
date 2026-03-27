<template>
  <div>
    <h2>Squirrel Sightings By Color</h2>
  </div>
  <div class="chart">
    <Doughnut :data="chartData" :options="ChartOptions"  />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Doughnut } from 'vue-chartjs'





</script> 