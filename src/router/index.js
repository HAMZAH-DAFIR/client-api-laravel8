import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashbord from '../views/Dashbord.vue'
import Singin from '../views/Singin.vue'
import store from '@/store'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashbord',
        name: 'Dashbord',
        component: Dashbord,
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/auth']) {
                return next({ name: 'Singin' })
            }
            next()
        }
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