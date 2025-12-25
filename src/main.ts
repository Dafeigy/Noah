import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home/index.vue";
import Login from "./pages/login/index.vue"
import Main from "./pages/main/index.vue"
import search from "./pages/search/index.vue"
import ai from "./pages/ai/index.vue"
import settings from "./pages/settings/index.vue"
import help from "./pages/help/index.vue"
import Error404 from "./pages/error/index.vue"
import New from "./pages/new/index.vue"
const routes = [
    {
        path: '/login',
        component: Login,
        name: '/'
    },
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '',
                component: Home,
                name: 'home'
            },
            {
                path: 'search',
                component: search,
                name: 'search'
            },
            {
                path: 'ai',
                component: ai,
                name: 'ai'
            },
            {
                path: 'open',
                component: Main,
                name: 'open'
            },
            {
                path: 'settings',
                component: settings,
                name: 'settings'
            },
            {
                path: 'help',
                component: help,
                name: 'help'
            },
            {
                path: '/:pathMatch(.*)*',
                component: Error404,
                name: '404'
            }
            
        ]
    },
    
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

createApp(App).use(router).mount("#app");