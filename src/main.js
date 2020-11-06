import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import reactiveStorage from "vue-reactive-storage"
import { register } from "register-service-worker"

Vue.use(require('vue-moment'))
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(reactiveStorage, {
    name: "",
    category: ""
})
Vue.use(register)


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");