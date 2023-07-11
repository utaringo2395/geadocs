import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import criterios from '../views/criterios.vue'
import librerias from '../views/librerias.vue'
import guiaConfig from '../views/guiaConfig.vue'
import guiaGA from '../views/guiaGA.vue'
import guiaJS from '../views/guiaJS.vue'
import guiaPlantillas from '../views/guiaPlantillas.vue'
import plantillas from '../views/plantillas.vue'
import color from '../views/color.vue'
import texto from '../views/texto.vue'
import icIconify from '../views/icIconify.vue'
import icPortal from '../views/icPortal.vue'
import cAcordion from '../views/cAcordion.vue'
import cBotones from '../views/cBotones.vue'
import cCartas from '../views/cCartas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/criterios',
      name: 'criterios',
      component: criterios
    },
    {
      path: '/librerias',
      name: 'librerias',
      component: librerias
    },
    {
      path: '/guiaConfig',
      name: 'guiaConfig',
      component: guiaConfig
    },
    {
      path: '/guiaGA',
      name: 'guiaGA',
      component: guiaGA
    },
    {
      path: '/guiaJS',
      name: 'guiaJS',
      component: guiaJS
    },
    {
      path: '/guiaPlantillas',
      name: 'guiaPlantillas',
      component: guiaPlantillas
    },
    {
      path: '/plantillas',
      name: 'plantillas',
      component: plantillas
    },
    {
      path: '/color',
      name: 'color',
      component: color
    },
    {
      path: '/texto',
      name: 'texto',
      component: texto
    },
    {
      path: '/icIconify',
      name: 'icIconify',
      component: icIconify
    },
    {
      path: '/icPortal',
      name: 'icPortal',
      component: icPortal
    },
    {
      path: '/cAcordion',
      name: 'cAcordion',
      component: cAcordion
    },
    {
      path: '/cBotones',
      name: 'cBotones',
      component: cBotones
    },
    {
      path: '/cCartas',
      name: 'cCartas',
      component: cCartas
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
