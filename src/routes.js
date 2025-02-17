import TodoApp from "./components/TodoApp.vue";
import test from "./components/test.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes= [
    {
        path: "/",
        component: TodoApp,
    },
    {
        path: "/test",
        component: test
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;