import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home/index.vue";

const routes = [
    {
        path: '/',
        component: Home,
        name: '/'
    },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

createApp(App).use(router).mount("#app");