import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Dashboard from './pages/Dashboard.vue'

const routes = [
   { path: '/', component: Dashboard },
   { path: '/login' , component: Login },
   { path: '/register', component: Register }
]

const router = createRouter({
   history: createWebHistory(),
   routes
})



createApp(App).use(router).mount('#app')
