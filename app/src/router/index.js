import { createRouter, createWebHistory } from 'vue-router'
import SquirrelData from '@/views/SquirrelData.vue'
import SquirrelColorChart from '@/components/SquirrelColorChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sqrl/:unique_squirrel_id',
      name: 'squirreldata',
      component: SquirrelData,
    },
    {
      path: '/',
      name: 'squirrelcolors',
      component: SquirrelColorChart
    },
    
  ],
})

export default router
