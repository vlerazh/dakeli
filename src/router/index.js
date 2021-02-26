import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddMenuItem from '@/components/AddMenuItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/addItem',
      name:'AddMenuItem',
      component: AddMenuItem
    }
  ]
})
