import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'MainPage',
      path: '/',
      component: MainPage,
      children: [
        {
          path: '/',
          component: Login,
          name: 'Login'
        },
        {
          path: '/register',
          component: Register,
          name: 'Register'
        }
      ]
    }
  ],
  mode: 'history'
})
