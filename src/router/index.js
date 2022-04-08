import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  	redirect:"test15",
  },
  {
    path: '/test15',
  	name:"test15",
    component: () => import('../views/test15.vue')
  },
  {
    path: '/test14',
  	name:"test14",
    component: () => import('../views/test14.vue')
  },
  {
    path: '/test13',
  	name:"test13",
    component: () => import('../views/test13.vue')
  },
  {
    path: '/test12',
  	name:"test12",
    component: () => import('../views/test12.vue')
  },
  {
    path: '/test11',
  	name:"test11",
    component: () => import('../views/test11.vue')
  },
  {
    path: '/test10',
  	name:"test10",
    component: () => import('../views/test10.vue')
  },
  {
    path: '/test9',
  	name:"test9",
    component: () => import('../views/test9.vue')
  },
  {
    path: '/test8',
  	name:"test8",
    component: () => import('../views/test8.vue')
  },
  {
    path: '/test7',
  	name:"test7",
    component: () => import('../views/test7.vue')
  },
  {
    path: '/test6',
  	name:"test6",
    component: () => import('../views/test6.vue')
  },
  {
    path: '/test5',
  	name:"test5",
    component: () => import('../views/test5.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test1',
	name: 'test1',
    component: () => import('../views/test1.vue')
  },
  {
    path: '/test2',
    component: () => import('../views/test2.vue')
  },
  {
    path: '/test3',
	name:"test3",
    component: () => import('../views/test3.vue')
  },
  {
    path: '/test4',
  	name:"test4",
    component: () => import('../views/test4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router