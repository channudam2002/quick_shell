import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import LayoutView from '../views/profile/LayoutView.vue'
import BLayoutView from '../views/back_office/BLayoutView.vue'
import ShellsView from '../views/back_office/ShellsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
  {
    path: '/back-office',
    name: 'back-office',
    component: BLayoutView,
    meta: {
      needsAuth: true
    },
    children:[
      { 
        path: '/shells',
        name: 'shells',
        component: ShellsView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.meta.needsAuth){
    if(localStorage.getItem('token')){
      next()
    }else{
      next("/sign-in");
    }
  }else{
    if(to.name=="sign-in" || to.name=="sign-up"){
      if (localStorage.getItem('token')){
        next('/')
      }
    }
    next();
  }
})

export default router
