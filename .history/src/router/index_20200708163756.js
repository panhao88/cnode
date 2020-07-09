import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path:'/home',
    redirect: '/'
  },
  {
    path:'/',
    component:layout,
    children:[
      {
        path:'',
        name:'Home',
        component:Home,
      },
      {
        path:'Details',
        name:'Details',
        component:() => import('../views/Details/Details.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../views/Login/Login')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path:'*',
    component:() => import('../views/err/err')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {

  next()
})

export default router
