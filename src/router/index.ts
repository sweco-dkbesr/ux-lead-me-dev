import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
        path: '/principles',
        name: 'Principper',
        meta: {
            breadCrumb: 'Principper'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Principles.vue')
    },
    {
        path: '/what',
        name: 'Hvad er Lean UX',
        meta: {
            breadCrumb: 'Hvad er UX'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/What.vue')
    },
    {
        path: '/ux-and-you',
        name: 'UX og dig',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/UXOgDig.vue')
    },
    {
        path: '/methods',
        name: 'Metoder',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/methods/MethodsRoot.vue'),
        meta: {
            breadCrumb: 'Metoder'
        },
        children: [
            {
                path: '/',
                // component: '../views/methods/TreTolvEt.vue',
                component: () => import(/* webpackChunkName: "about" */ '../views/methods/Methods.vue'),
                meta: {
                    breadCrumb: 'Metoder'
                }
            },
            {
                path: 'tte',
                // component: '../views/methods/TreTolvEt.vue',
                component: () => import(/* webpackChunkName: "about" */ '../views/methods/TreTolvEt.vue'),
                meta: {
                    breadCrumb: 'TreTolvEt'
                }
            }
        ]
    },
    {
        path: '/products',
        name: 'Products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
