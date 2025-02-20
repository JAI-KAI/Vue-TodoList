import TodoApp from "./components/TodoApp.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes= [
    {
        path: "/",
        component: TodoApp,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;