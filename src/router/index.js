import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 {
    path:'/login',
    name:'login',
    component:()=>import('@/views/LoginView.vue')
 },
 {
    path:'/signup',
    name:'signup',
    component:()=>import('@/views/SignUpView.vue')
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
