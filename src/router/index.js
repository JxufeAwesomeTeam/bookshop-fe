import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Login from '@/view/login'
import Register from '@/view/register'
import User from '@/view/user'
import Serarch from '@/view/search'
import Share from '@/view/share'
import Python from '@/view/python'
import Java from '@/view/java'
import Php from '@/view/php'
import Select from '@/view/select'
import Shop from '@/view/shop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/search/:name',
      name: 'Serarch',
      component: Serarch
    },
    {
      path: '/python',
      name: 'Python',
      component: Python
    },
    {
      path: '/java',
      name: 'Java',
      component: Java
    },
    {
      path: '/php',
      name: 'Php',
      component: Php
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
