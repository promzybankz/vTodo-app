<template>
<div>
    <b-container fluid class="cont">

        <b-row class="">
            <b-col cols="12" class="cola text-left p-3">
                <b-icon-arrow-left font-scale="2" class="cpoi" @click="goBack"></b-icon-arrow-left>
            </b-col>
            <b-col cols="" class="">

            </b-col>
            <b-col md="4">

            </b-col>
        </b-row>
        <b-row class="">
            <b-col md="3">

            </b-col>
            <b-col md="6" class="cola text-center">
                <div class="hellodiv">
                    <p>Add New Task</p>
                </div>
            </b-col>
            <b-col md="3">

            </b-col>
        </b-row>

        <b-row>
            <b-col md="3">

            </b-col>
            <b-col md="6" class="cola text-left">
                <form @submit.prevent="addTask">
                    <b-form-group>
                        <b-form-group>
                            <b-form-select class="p-2" v-model="newtask.categ" :options="category">
                                <b-form-select-option value="null">
                                    --Select Category--
                                </b-form-select-option>

                            </b-form-select>
                        </b-form-group>

                        <b-form-group class="mt-5">
                            <b-form-input type="text" class="p-4" v-model="newtask.task" placeholder="What to do"></b-form-input>
                        </b-form-group>

                        <b-form-group class="mt-5">
                            <b-form-select v-model="newtask.time" :options="session" class="p-2">
                                <b-form-select-option value="null">
                                    --Select Time--
                                </b-form-select-option>
                            </b-form-select>

                        </b-form-group>

                        <b-form-group class="mt-5 text-center">
                            <b-button type="submit" class="atb p-3 w-75">Add Task</b-button>
                        </b-form-group>

                    </b-form-group>
                </form>

            </b-col>
            <b-col md="3">

            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex"

export default {
    data() {
        return {
            newtask: this.getForm(),
            session: [
                'Morning', "Afternoon", "Evening", "Before Bed"
            ]
        }
    },
    created() {

        if (this.name.length == 0) {
            this.$router.push({
                name: "landing"
            })
        }

    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        addTask() {

        },
        getForm() {
            return {
                categ: null,
                task: "",
                time: null
            }
        },
        ...mapActions('setTask')

    },
    computed: {
        ...mapState({
            name: state => state.name,
            category: state => state.category
        })
    }

}
</script>

<style scoped>
.fsi {
    padding: 20px;
}

.cpoi {
    cursor: pointer !important
}

.hellodiv {
    font-size: 2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.namehello {
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
    margin-top: -25px;
}

.datehello {
    font-size: 16px;
    margin-top: -30px;
}

.tflex {
    display: flex;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.count {
    font-size: 25px;
    font-weight: bold;
}

.cont {
    min-height: 500px;
}

.ntask {
    background-color: rgba(105, 107, 105, 0.122);
}

.taskscat {
    height: 150px;
    cursor: pointer;
}

.taskcatwrapper {
    box-shadow: 1px 1px 2px;
    border-radius: 20px 20px;

}

.atb {
    font-size: 1.5rem;
    font-weight: bold;
    background-color: rgb(27, 108, 161);
    border-radius: 10px 10px;
}

.atb:hover {
    color: rgb(5, 27, 41);
    background-color: white;
}
</style>
