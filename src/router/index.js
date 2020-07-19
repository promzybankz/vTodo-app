import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
//import Hello from "../views/hello.vue";
import SayHello from '../views/SayHello.vue'
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
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;