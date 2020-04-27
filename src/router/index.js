import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Search from '../views/Search'
import Film from '../views/Film'

import Cinemas from '../views/Home/Cinemas'
import Films from '../views/Home/Films'
import My from '../views/Home/My'

import Comming from '../views/Home/Films/Comming'
import Now from '../views/Home/Films/Now'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'films',
        component: Films,
        children: [
          {
            path: 'now',
            component: Now
          },
          {
            path: 'comming',
            component: Comming
          },
          {
            path: '',
            redirect: '/home/films/now'
          }
        ]
      },
      {
        path: 'cinemas',
        component: Cinemas
      },
      {
        path: 'my',
        component: My
      }
    ]
  },

  {
    path: '/login',
    component: Login
  },
  {
    path: '/film',
    component: Film
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
