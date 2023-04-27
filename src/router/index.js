import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import LayoutView from '../views/profile/LayoutView.vue'
import BLayoutView from '../views/back_office/BLayoutView.vue'
import ShellsView from '../views/back_office/ShellsView.vue'
import TerminalsView from '../views/back_office/TerminalsView.vue'
import AccountsView from '../views/back_office/AccountsView.vue'
import DashboardView from '../views/back_office/DashboardView.vue'
import VerifyView from '../views/VerifyView.vue'
import HostingsView from '../views/back_office/HostingsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView
  },
  {
    path: '/verify',
    name: 'verify',
    component: VerifyView
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
    path: "/back-office",
    redirect: "/dashboard"
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
        path: "/dashboard",
        name: 'dashboard',
        component: DashboardView
      },
      { 
        path: '/shells',
        name: 'shells',
        component: ShellsView
      },
      {
        path: '/shells/terminal/:id',
        name: 'terminal',
        component: TerminalsView
      },
      { 
        path: '/account',
        name: 'account',
        component: AccountsView
      },
      {
        path: '/hosting',
        name: 'hosting',
        component: HostingsView
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
