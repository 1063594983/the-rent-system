import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index/index'
import HouseSource from '@/views/Index/HouseSource/index'
import MyOrder from '@/views/Index/MyOrder/index'
import UserCenter from '@/views/Index/UserCenter/index'

import UserLogin from '@/views/UserLogin/index'

// 聊天页面
import Dialog from '@/views/Dialog/index'

// Demo页面
import Demo from '@/views/Demo/index'

import Demo2 from '@/views/demo2'
import HouseDetails from '@/views/HouseDetails/index'
import Search from '@/views/search'
import SearchResult from '@/views/search-result'

import ReleaseOrder from '@/views/ReleaseOrder/index'

import DemoCom from '@/components/demo-component'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      redirect: '/user-login'
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
      path: '/house-details/:id',
      name: 'house-details',
      meta: {
        index: 4
      },
      component: HouseDetails
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
      path: '/demo2',
      name: 'demo2',
      meta: {
        index: 1
      },
      component: Demo2
    },
    {
      path: '/release-order',
      name: 'release-order',
      meta: {
        index: 2
      },
      component: ReleaseOrder
    },
    {
      path: '/dialog',
      name: 'dialog',
      meta: {
        index: 5
      },
      component: Dialog
    }
  ]
})
