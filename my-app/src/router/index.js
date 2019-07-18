import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Home from '../pages/home'
import Classific from '../pages/classific'
import Shopping from '../pages/shopping'
import Hequxq from '../pages/hequxq'
import Hqsh from '../pages/hqsh'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classific',
      name: 'Classific',
      component: Classific
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/hequxq',
      name: 'Hequxq',
      component: Hequxq
    },
    {
      path: '/hqsh',
      name: 'Hqsh',
      component: Hqsh
    },
    {path:'/*',redirect:"/index"},


  ]
})
