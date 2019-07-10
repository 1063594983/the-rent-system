import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index'
import UserLogin from '@/views/user-login'
import UserIndex from '@/views/user-index'
import Demo from '@/views/demo'
import RentInfoDetails from '@/views/rent-info-details'
import Search from '@/views/search'
import SearchResult from '@/views/search-result'
import ReleaseOrder from '@/views/release-order'

import DemoCom from '@/components/demo-component'
import HouseSource from '@/components/house-source'
import MyOrder from '@/components/my-order'
import UserCenter from '@/components/user-center'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index'
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
      path: '/index',
      name: 'index',
      meta: {
        index: 1
      },
      component: Index,
      children: [{
        path: "",
        redirect: 'house-source'
      },{
        path: 'house-source',
        name: 'house-source',
        meta: {
          index: 1
        },
        component: HouseSource
      }, {
        path: 'my-order',
        name: 'my-order',
        meta: {
          index: 1
        },
        component: MyOrder
      }, {
        path: 'user-center',
        name: 'user-center',
        meta: {
          index: 1
        },
        component: UserCenter
      }]
    },
    {
      path: '/rent-info-details/:id',
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
      meta: {
        index: 1
      },
      component: Demo
    },
    {
      path: '/release-order',
      name: 'release-order',
      meta: {
        index: 2
      },
      component: ReleaseOrder
    }
  ]
})
