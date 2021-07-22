import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashbord from '../views/Dashbord.vue'
import Singin from '../views/Singin.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashbord',
        name: 'Dashbord',
        component: Dashbord
    },
    {
        path: '/singin',
        name: 'Singin',
        component: Singin
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router