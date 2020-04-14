import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Protopersonas from '../views/products/Protopersonas.vue'

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
        component: {
            template: `
                <div class="user">
                  <h2>METODER {{ $route.props }}</h2>
                  <router-view></router-view>
                </div>
              `
        },
        props: {
            id: 0
        },
        meta: {
            breadCrumb: 'Metoder'
        },
        children: [
            {
                path: '/',
                component: () => import(/* webpackChunkName: "about" */ '../views/methods/Methods.vue'),
                meta: {
                    breadCrumb: 'Metoder'
                },
                props: {
                    id: 1
                }
            },
            {
                path: '/3-12-1',
                // component: '../views/methods/TreTolvEt.vue',
                component: () => import(/* webpackChunkName: "about" */ '../views/methods/TreTolvEt.vue'),
                meta: {
                    breadCrumb: '3-12-1'
                },
                props: { path: 'methods/3-12-1' }
            },
            {
                path: '/design-thinking',
                // component: '../views/methods/TreTolvEt.vue',
                component: () => import(/* webpackChunkName: "about" */ '../views/methods/DesignThinking.vue'),
                meta: {
                    breadCrumb: 'Design Thinking'
                }
                // props: { path: 'methods/3-12-1' }
            },
            {
                path: '/design-sprint',
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
        meta: {
            breadCrumb: 'Produkter'
        },
        component: {
            template: `<div><router-view></router-view></div>`
        },
        children: [
            {
                path: '/',
                component: () => import(/* webpackChunkName: "about" */ '../views/products/ProductsRoot.vue'),
                // meta: {
                //     breadCrumb: 'Produkter'
                // }
            },
            {
                path: 'protopersonas',
                name: 'Protopersonas',
                // name: 'Protopersonas',
                component: () => import(/* webpackChunkName: "about" */ '../views/products/Protopersonas.vue'),
                meta: {
                    path: 'products/protopersonas',
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
