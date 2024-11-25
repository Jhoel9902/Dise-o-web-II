import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './components/inicio.vue'
import ejemplorouter from './components/ejemplorouter.vue'
import Turismo from './components/turismo.vue'
import Cultura from './components/cultura.vue'
import Gastronomia from './components/gastronomia.vue'
import Hoteles from './components/hoteles.vue'
import Festividades from './components/festividades.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/otro', component:  ejemplorouter},
  { path: '/Turismo', component: Turismo},
  { path: '/Cultura', component: Cultura},
  { path: '/Gastronomia', component: Gastronomia},
  { path: '/Hoteles', component: Hoteles},
  { path: '/Festividades', component: Festividades}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router