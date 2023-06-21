import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'listar-movimentacao',
    component: () => import('@/views/movimentacao/MovimentacaoListaView.vue')
  },
  {
    path: '/formulario-movimentacao',
    name: 'formulario-movimentacao',
    component: () => import('@/views/movimentacao/MovimentacaoFormView.vue')
  },
  {
    path: '/listar-condutor',
    name: 'listar-condutor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/condutor/CondutorListaView.vue')
  },
  {
    path: '/formulario-condutor',
    name: 'formulario-condutor',
    component: () => import('@/views/condutor/CondutorFormView.vue')
  },
  {
    path: '/listar-marca',
    name: 'listar-marca',
    component: () => import('@/views/marca/MarcaListaView.vue'),
  },
  {
    path: '/formulario-marca',
    name: 'formulario-marca',
    component: () => import('@/views/marca/MarcaFormView.vue')
  },
  {
    path: '/listar-modelo',
    name: 'listar-modelo',
    component: () => import('@/views/modelo/ModeloListaView.vue')
  },
  {
    path: '/formulario-modelo',
    name: 'formulario-modelo',
    component: () => import('@/views/modelo/ModeloFormView.vue')
  },
  {
    path: '/listar-veiculo',
    name: 'listar-veiculo',
    component: () => import('@/views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/formulario-veiculo',
    name: 'formulario-veiculo',
    component: () => import('@/views/veiculo/VeiculoFormView.vue')
  },
  {
    path: '/configuracao',
    name: 'configuracao',
    component: () => import('@/views/configuracao/ConfiguracaoListaView.vue')
  },
  {
    path: '/formulario-configuracao',
    name: 'formulario-configuracao',
    component: () => import('@/views/configuracao/ConfiguracaoFormView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
