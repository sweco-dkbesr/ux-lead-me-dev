import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LeadDynamicView from "@/views/LeadDynamicView.vue";

Vue.use(VueRouter)

export const routes = [
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
        path: '/from-404',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/From404.vue')
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
        path: '/how-far',
        name: 'How Far',
        meta: {
            breadCrumb: 'Hvor langt er vi?'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/HowFar.vue')
    },

    {
        path: '/ux-and-you',
        component: {
            name: 'uxandyou',
            template: '<div>RV<router-view><router-view></router-view></router-view></div>'
        },
        meta: {
            breadCrumb: 'UX og dig'
        },
        // key: 'uxandyou',
        children: [
            {
                path: '/',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/LeadDynamicView.vue'),
                props: {
                    file: '../../content/ux-and-you/ux-and-you.html'
                },
                meta: {
                    breadCrumb: 'UX og dig'
                },
                key: 'uxandyou2',
            },
            {
                path: 'product-owner',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/LeadDynamicView.vue'),
                props: {
                    file: '../../content/ux-and-you/product-owner.html'
                },
                meta: {
                    breadCrumb: 'Product Owner'
                },
                key: 'productowner',
            }
        ]
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
        component: {
            template: '<div><router-view></router-view></div>'
        },
        meta: {
            breadCrumb: 'Metoder'
        },
        children: [
            {
                path: '/',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/LeadDynamicView.vue'),
                props: {
                    file: '../../content/methods/methods.html'
                },
                meta: {
                    breadCrumb: 'Metoder'
                }
            },
            {
                path: 'usability',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/Usability.vue'),
                props: {
                    file: '../../../content/methods/usability.html'
                },
                meta: {
                    breadCrumb: 'Usability'
                }
            },
            {
                path: 'usability-testing',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/UsabilityTesting.vue'),
                props: {
                    file: '../../../content/methods/usability-testing.html'
                },
                meta: {
                    breadCrumb: 'Usability Testing'
                }
            },
            {
                path: 'usability-interviews',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/UsabilityInterviews.vue'),
                props: {
                    file: '../../../content/methods/usability-interviews.html'
                },
                meta: {
                    breadCrumb: 'Usability Interviews'
                }
            },
            {
                path: '3-12-1',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/TreTolvEn.vue'),
                props: {
                    file: '../../../content/methods/3-12-1.html'
                },
                meta: {
                    breadCrumb: '3-12-1'
                }
            },
            {
                path: 'design-thinking',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/DesignThinking.vue'),
                props: {
                    file: '../../content/methods/design-thinking.html'
                },
                meta: {
                    breadCrumb: 'Design Thinking'
                }
            },
            {
                path: 'design-sprint',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/DesignSprint.vue'),
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
        meta: {
            breadCrumb: 'Produkter'
        },
        component: {
            template: `<div><router-view><router-view></router-view></router-view></div>`
            // template: `<div><router-view></router-view></div>`
        },
        children: [
            {
                path: '/',
                name: 'products',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/LeadDynamicView.vue'),
                props: {
                    file: '../../content/products/products.html'
                },
                meta: {
                    breadCrumb: 'Produkter'
                }
            },
            {
                path: 'personas',
                name: 'personas',
                // component: LeadDynamicView,
                // component: () => import(/* webpackChunkName: "about" */ '../views/LeadDynamicView.vue'),
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/Personas.vue'),
                props: {
                    file: '../../content/products/personas.html'
                },
                meta: {
                    breadCrumb: 'Personas'
                }
            },
            {
                path: 'protopersonas',
                name: 'protopersonas',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/Protopersonas.vue'),
                props: {
                    file: '../../content/products/protopersonas.html'
                },
                meta: {
                    breadCrumb: 'Protopersonas'
                }
            },
            {
                path: 'user-flows',
                name: 'userflows',
                // component: LeadDynamicView,
                component: () => import(/* webpackChunkName: "about" */ '../views/temporary-views/UserFlows.vue'),
                props: {
                    file: '../../content/products/user-flows.html'
                },
                meta: {
                    breadCrumb: 'User Flows'
                }
            }
        ]
    }

]

// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })
//
// export default router
