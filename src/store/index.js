import Vue from "vue";
import Vuex from "vuex";
import reactiveStorage from "vue-reactive-storage"

Vue.use(reactiveStorage, {
    name: "",
    category: "",
    tasks: ""
})

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "",
        category: [
            "Personal",
            "Home",
            "Work",
            "Family",
            "School"
        ]
    },
    mutations: {

        SET_NAME(state, name) {
            state.name = name
        },
        SET_CATEGORY(state, category) {
            state.category = category
        }
    },
    actions: {

        setName({ commit }, name) {
            commit("SET_NAME", name)
        },
        getCategory({ commit, state }) {
            //alert(JSON.stringify(localStorage.category))
            console.log(JSON.stringify(localStorage.category))
            if (localStorage.category) {
                commit("SET_CATEGORY", JSON.parse(localStorage.category))
            } else {
                localStorage.category = JSON.stringify(state.category)
            }
        },
        //setTask({ commit }, taskObj) {

        //}
    },
    modules: {

    }
});