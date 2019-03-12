import Vue from 'vue'
import Router from 'vue-router'

import UserLogin from '@/views/user-login'
import UserIndex from '@/views/user-index'
import Demo from '@/views/demo'
import RentInfoDetails from '@/views/rent-info-details'
import Search from '@/views/search'
import SearchResult from '@/views/search-result'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/user-index'
    },
    {
      path: '/user-login',
      name: 'user-login',
      meta: {
        index: 0
      },
      component: UserLogin
    },
    {
      path: '/user-index',
      name: 'user-index',
      meta: {
        index: 1
      },
      component: UserIndex
    },
    {
      path: '/rent-info-details',
      name: 'rent-info-details',
      meta: {
        index: 4
      },
      component: RentInfoDetails
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        index: 2
      },
      component: Search
    },
    {
      path: '/search-result',
      name: 'search-result',
      meta: {
        index: 3
      },
      component: SearchResult
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
