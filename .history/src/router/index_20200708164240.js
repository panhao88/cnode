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
        meta:{
          titile:""
        }
      },
      {
        path:'Details',
        name:'Details',
        component:() => import('../views/Details/Details.vue'),
        meta:{
          title:'详情页'
        }
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../views/Login/Login'),
    meta:{
      title:'登录页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue'),
    meta:{
      title:'about页'
    }
  },
  {
    path:'*',
    component:() => import('../views/err/err'),
    meta:{
      title:'出错啦'
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 改变游览器的标题
router.beforeEach((to,from,next) => {
  document.title = to.meta.title

  next()
})

export default router
