import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Dashboard from './pages/Dashboard.vue'
import Success from './pages/Success.vue'

const routes = [
   { path: '/', component: Dashboard, 
      meta: {
         requiresAuth: true // Add meta field to indicate protected route
      } 
   },
   { path: '/login' , component: Login },
   { path: '/register', component: Register },
   { path: '/success', component: Success }
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

// Basic authentication
router.beforeEach((to, from, next) => {
   if (to.meta.requiresAuth) {
      const token = localStorage.getItem('token'); 
      if (token) {
         // User is authenticated, proceed to route
         next(); 
      } else {
         // User is not authenticated, redirect to /login
         next('/login'); 
      }
   } else {
      // Non-protected route, allow access
      next(); 
   }
})


createApp(App).use(router).mount('#app')
