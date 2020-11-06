import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
//import Hello from "../views/hello.vue";
import SayHello from '../views/SayHello.vue'
import NewTask from '@/views/NewTask'
import Category from '@/views/Category'
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: 'landing',
        component: Landing
    },
    {
        path: "/hello",
        name: 'hello',
        component: SayHello
    },
    {
        path: "/addtask",
        name: 'addtask',
        component: NewTask
    },
    {
        path: "/category/:category",
        name: 'category',
        component: Category,
        props: true
    }



];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;