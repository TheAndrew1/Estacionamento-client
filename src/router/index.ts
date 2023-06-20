import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'listar-movimentacao',
    component: () => import('@/views/movimentacao/MovimentacaoListaView.vue')
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
    path: '/listar-marca',
    name: 'listar-marca',
    component: () => import('@/views/marca/MarcaListaView.vue'),
    children: 
    [{
      // UserProfile will be rendered inside User's <router-view>
      // when /user/:id/profile is matched
      path: 'formulario',
      component: () => import('@/views/marca/MarcaFormView.vue')
    }]
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
    path: '/listar-veiculo',
    name: 'listar-veiculo',
    component: () => import('@/views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/configuracao',
    name: 'configuracao',
    component: () => import('@/views/configuracao/ConfiguracaoListaView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
