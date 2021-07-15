import Vue from 'vue'
import VueRouter from 'vue-router'
import Consignments from '../views/Consignments.vue'
import Consignment from '../views/Consignment.vue'
import NewConsignment from '../components/NewConsigment.vue'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'empty-layout' },
    component: Home
  },
  {
    path: '/consignments',
    name: 'consignments',
    meta: { layout: 'main-layout' },
    component: Consignments
  },
  {
    path: '/consignment',
    name: 'consignment-',
    meta: { layout: 'main-layout' },
    component: Consignment
  },
  {
    path: '/test',
    name: 'test',
    meta: { layout: 'main-layout' },
    component: NewConsignment
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
