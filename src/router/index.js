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
        component: Dashbord,
        beforeEnter: (to, from, next) => {
            console.log('to', to)
            console.log('from', from)
            console.log('next', next)
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