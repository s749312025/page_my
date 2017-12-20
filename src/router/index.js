import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import {modules, common} from '@/components/'

//const modules = require('@/components/modules/')

const login = r => require.ensure([], () => r(modules.login), 'login')
const mainFrame = r => require.ensure([], () => r(modules.mainFrame), 'mainFrame')
const article = r => require.ensure([], () => r(modules.article), 'article')
const articleDetails = r => require.ensure([], () => r(modules.articleDetails), 'articleDetails')

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
          path: '/article/:type',
          name: '文章列表',
          component: article,
          children: [
            {
              path: '/article/details/:id',
              name: '详情',
              component: articleDetails
            }
          ]
        }
      ]
    }
  ]
})
