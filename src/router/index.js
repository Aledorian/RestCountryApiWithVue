import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CountryDetails from '@/views/CountryDetails.vue'

const routes = [
    {
        path: '/', 
        name: "home",
        component: Home,
    },
    {
        path: '/details/:id',
        name: 'CountryDetails',
        component: CountryDetails,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory("/RestCountryApiWithVue/"),
    routes,
})

export default router;