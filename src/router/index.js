import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//import {modules, common} from '@/components/'

//const modules = require('@/components/modules/')

import {login, article, mainFrame, articleDetails, articleAdd} from '@/components/modules'

//const login = r => require.ensure([], () => r(modules.login), 'login')
// const mainFrame = r => require.ensure([], () => r(modules.mainFrame), 'mainFrame')
// const article = r => require.ensure([], () => r(modules.article), 'article')
// const articleDetails = r => require.ensure([], () => r(modules.articleDetails), 'articleDetails')
// const articleAdd = r => require.ensure([], () => r(modules.articleAdd), 'articleAdd')

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
          path: '/article/add',
          name: '文章添加',
          component: articleAdd
        },
        {
          path: '/article/update/:_id',
          name: '文章修改',
          component: articleAdd
        },
        {
          path: '/article/:type',
          name: '文章列表',
          component: article,
          children: [
            {
              path: '/article/details/:_id',
              name: '详情',
              component: articleDetails
            }
          ]
        }
      ]
    }
  ]
})
