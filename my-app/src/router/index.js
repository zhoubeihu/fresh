import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Mine from '../pages/mine'
import Carshop from '../pages/carshop'
import Fenlei from '../pages/fenlei'
import Hequlife from '../pages/Hequlife'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hequlife',
      name: 'Hequlife',
      component: Hequlife
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/carshop',
      name: 'Carshop',
      component: Carshop
    },
    {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },
    {path:'/*',redirect:"/index"},


  ]
})
