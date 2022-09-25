import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckoutPage from '@/views/CheckoutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CheckoutPage
  }

]

const router = new VueRouter({
  routes
})

export default router
