import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import {modules, common} from '@/components/'

//const modules = require('@/components/modules/')

const login = r => require.ensure([], () => r(modules.login), 'login')
const mainFrame = r => require.ensure([], () => r(modules.mainFrame), 'mainFrame')
const managerList = r => require.ensure([], () => r(modules.managerList), 'home')

export default new Router({
  routes: [
    {
      path: '/',
      redirect() {
        return 'login'
      }
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/mainFrame',
      name: '首页',
      component: mainFrame,
      children:[
        {
          path: '/managerList',
          name: '管理员列表',
          component: managerList
        }
      ]
    }
  ]
})
