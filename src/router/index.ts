import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   // component: () => import('../views/HomeView.vue'),
    //   children: [{
    //     path: '/settings',
    //     name: 'Settings',
    //     // route level code-splitting
    //     // this generates a separate chunk (About.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import('../views/SettingsView.vue')
    //   }]
    // }
  ],
})

export default router