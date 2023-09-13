import MasterPageVue from '@/component/MasterPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeViewVue from '@/views/HomeView.vue';
import {WebPages} from'@/constants'
import ListarItems from '@/component/ListarItems.vue';



const routes = [
    {
      path: '/',
      components: { default: HomeViewVue }, 
      name: WebPages.HOME
    },
    {
        path: '/system',
        components: { default: MasterPageVue },
        name: WebPages.SYSTEM
    },
    {
      path: '/listar',
      components: { default: ListarItems },
      name: WebPages.LISTARITEMS,
    },

  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })


export default router

  

