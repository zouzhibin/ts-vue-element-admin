import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layouts from '../views/layouts/index.vue'
import Login from '../views/login/index.vue'
import {staticRouter} from './modules/staticRouter'
console.log('staticRouter==',staticRouter)
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  ...staticRouter

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location:any) {
  // @ts-ignore
  return originalPush.call(this, location).catch((err: any) => {
    return err;
  })
}


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
