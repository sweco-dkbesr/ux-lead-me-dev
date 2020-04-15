import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Protopersonas from '../views/products/Protopersonas.vue'
import LeadDynamicView from "@/views/LeadDynamicView.vue";

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
        component: LeadDynamicView,
        props: {
            file: '../../content/ux-and-you.html'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/UXOgDig.vue')
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
            template: '<div><router-view></router-view></div>'
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
                }
            },
            {
                path: '3-12-1',
                component: LeadDynamicView,
                props: {
                    file: '../../content/methods/3-12-1.html'
                },
                meta: {
                    breadCrumb: '3-12-1'
                }
            },
            {
                path: 'design-thinking',
                component: LeadDynamicView,
                props: {
                    file: '../../content/methods/design-thinking.html'
                },
                meta: {
                    breadCrumb: 'Design Thinking'
                }
            },
            {
                path: 'design-sprint',
                component: LeadDynamicView,
                props: {
                    file: '../../content/methods/design-sprint.html'
                },
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
            template: `<div><router-view><router-view></router-view></router-view></div>`
        },
        children: [
            {
                path: '/',
                name: 'products',
                component: LeadDynamicView,
                props: {
                    file: 'products/products.html'
                },
                meta: {
                    breadCrumb: 'Produkter'
                }
            },
            {
                path: 'personas',
                name: 'personas',
                component: LeadDynamicView,
                props: {
                    file: '../../content/products/personas.html'
                },
                meta: {
                    breadCrumb: 'Personas'
                }
            },
            {
                path: 'protopersonas',
                name: 'Protopersonas',
                component: LeadDynamicView,
                props: {
                    file: '../../content/products/protopersonas.html'
                },
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
