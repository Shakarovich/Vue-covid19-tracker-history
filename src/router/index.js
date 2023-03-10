import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/view/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router;
