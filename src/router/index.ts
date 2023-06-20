import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/vue/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listar-condutor',
    name: 'listar-condutor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vue/AboutView.vue')
  },
  {
    path: '/listar-marca',
    name: 'listar-marca',
    component: () => import('@/views/marca/MarcaListaView.vue')
  },
  {
    path: '/listar-modelo',
    name: 'listar-modelo',
    component: () => import('@/views/marca/MarcaListaView.vue')
  },
  {
    path: '/listar-veiculo',
    name: 'listar-veiculo',
    component: () => import('@/views/marca/MarcaListaView.vue')
  },
  {
    path: '/configuracao',
    name: 'configuracao',
    component: () => import('@/views/marca/MarcaListaView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
