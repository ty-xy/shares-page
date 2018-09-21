import Vue from 'vue'
import Router from 'vue-router'
import Today from '@/components/today'
import ShoppingCard from '@/components/ShoppingCard'
import VModel from '@/components/VModel'
import Slot from '@/components/Slot'
import NextTick from '@/components/NextTick'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'today',
      component: Today
    },
    {
      path: '/shopping',
      name: 'ShoppingCard',
      component: ShoppingCard
    },
    {
      path: '/vmodel',
      name: 'VModel',
      component: VModel
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot
    },
    {
      path: '/',
      name: 'NextTick',
      component: NextTick
    }
  ]
})
