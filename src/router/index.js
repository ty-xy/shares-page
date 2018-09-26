import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import $ from 'jquery'

import Today from '@/components/today/today'
import BaseLine from '@/components/base-line/base-line'
import Industry from '@/components/industry'
import Suggest from '@/components/suggest'

Vue.prototype.$axios = axios
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//   next()
// })

Vue.use(Router, VueAxios, axios)

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
      path: '/base',
      name: 'base-line',
      component: BaseLine
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: Suggest
    },
    {
      path: '/industry',
      name: 'industry',
      component: Industry
    }
  ]
})
