import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Calculator from "@/views/Calculator.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/calculator",
        name: "Calculator",
        component: Calculator,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;