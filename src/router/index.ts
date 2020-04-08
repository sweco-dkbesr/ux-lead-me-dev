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
        path: '/proces',
        name: 'Proces',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Proces.vue')
    },
    {
        path: '/methods',
        name: 'Metoder',
        component: () => import(/* webpackChunkName: "about" */ '../views/methods/MethodsRoot.vue'),
        meta: {
            breadCrumb: 'Metoder'
        },
        children: [
            {
                path: '/',
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
                    breadCrumb: '3-12-1'
                }
            },
            {
                path: 'design-sprint',
                // component: '../views/methods/TreTolvEt.vue',
                component: () => import(/* webpackChunkName: "about" */ '../views/methods/DesignSprint.vue'),
                meta: {
                    breadCrumb: 'Design Sprint'
                }
            }
        ]
    },
    {
        path: '/products',
        name: 'Produkter',
        component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductsRoot.vue'),
        meta: {
            breadCrumb: 'Produkter'
        },
        children: [
            {
                path: '/',
                component: () => import(/* webpackChunkName: "about" */ '../views/products/Products.vue'),
                meta: {
                    breadCrumb: 'Products'
                }
            },
            {
                path: '/protopersonas',
                // component: '../views/methods/TreTolvEt.vue',
                component: () => import(/* webpackChunkName: "about" */ '../views/products/Protopersonas.vue'),
                meta: {
                    breadCrumb: 'Protopersonas'
                }
            }
            ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
