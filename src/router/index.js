import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'
import middleware from "@grafikri/vue-middleware"
import home from './home'


Vue.use(VueRouter)
let route = [];
route = route.concat(home)

const RouterLayout = createRouterLayout(layout => {
  // Resolves a layout component with layout type string.
  return import('../layouts/' + layout + '.vue')
})

const routes = [
  {
    path: '',
    // Pass <RouterLayout> as the route component
    component: RouterLayout,

    // All child components will be applied with corresponding layout component
    children: route
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(middleware())

export default router
