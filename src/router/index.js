import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 {
    path:'/login',
    name:'login',
    component:()=>import('@/views/LoginView.vue')
 },
 {
    path:'/signup/mobile',
    name:'signup',
    component:()=>import('@/views/SignUpMobileView.vue')
 },
 {
  path:'/signup/otp',
  name:'signupotp',
  component:()=>import('@/views/SignUpOtpView.vue')
 },
 {
   path:'/signup/id',
   name:'signupid',
   component:()=>import('@/views/SignUpIdView.vue')
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
