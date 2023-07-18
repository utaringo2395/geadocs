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
import cCarruseles from '../views/cCarruseles.vue'
import cHeaders from '../views/cHeaders.vue'
import cSidebar from '../views/cSidebar.vue'
import formularios from '../views/formularios.vue'
import cNavbars from '../views/cNavbars.vue'
import cFooter from '../views/cFooter.vue'

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
    },
    {
      path: '/cCarruseles',
      name: 'cCarruseles',
      component: cCarruseles
    },
    {
      path: '/cHeaders',
      name: 'cHeaders',
      component: cHeaders
    },
    {
      path: '/cSidebar',
      name: 'cSidebar',
      component: cSidebar
    },   
    {
      path: '/formularios',
      name: 'formularios',
      component: formularios
    }, 
    {
      path: '/cNavbars',
      name: 'cNavbars',
      component: cNavbars
    },
    {
      path: '/cFooter',
      name: 'cFooter',
      component: cFooter
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
