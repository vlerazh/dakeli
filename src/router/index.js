import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddMenuItem from '@/components/AddMenuItem'
import EditMenuItem from '@/components/EditMenuItem'
import Speisekarte from '@/components/Speisekarte'

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
    },
    {
      path:'/speisekarte',
      name:'Speisekarte',
      component: Speisekarte
    },
    {
      path:'/editItem/:item_slug',
      name:'EditMenuItem',
      component: EditMenuItem,
      
    }
  ]
})
