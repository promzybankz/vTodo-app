<template>
<div>
    <b-container fluid class="dark">

        <b-row class="p-2 bg-aqua">
            
            <b-col class="mt-2 p-3 text-center">
                <h1 class="text-center">Welcome to vTodo</h1>
                <h5 class="text-center">Your Best Web Todo App</h5>
            </b-col>
            
        </b-row>
        <b-row class="p-4">
            
            <b-col class="middle mt-2 text-center">
                <h2 class="p-2 hidd">Login to start Scheduling</h2>
                <b-form @submit.prevent="logUser">
                    <b-form-group label="Login to start Scheduling" class="lbi text-center">

                        <b-form-input label="Login" placeholder="Name" class="finp p-4 m-3 mx-auto" v-model="Uname"></b-form-input>
                        <b-button type="submit" class="finp p-3 m-3 lgbtn mx-auto">Login</b-button>
                    </b-form-group>

                </b-form>
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
            Uname: ""
        }
    },
    mounted() {
        this.getCategory();

        if (this.localStorage.name != '') {
            this.setName(this.localStorage.name)
            this.$router.push({
                name: 'hello'
            })
        }

    },
    methods: {
        ...mapActions(['setName', 'getCategory']),
        logUser() {
            this.localStorage.name = this.Uname
            this.setName(this.localStorage.name)
            this.$router.push({
                name: 'hello'
            })
        },

    },
    computed: {
        ...mapState(['name'])
    }
}
</script>

<style scoped>
.lgbtn {
    font-weight: bolder;
    font-size: 20px;
    cursor: pointer;
    background-color: rgb(27, 108, 161)
}

.lgbtn:hover {
    background-color: white;
    color: rgb(5, 27, 41)
}

.dark {
    color: whitesmoke
}

.hidd {
    display: none;
}
.finp {
    width : 50%;
}
.lbi{
    font-size: 1.5rem;
    font-weight: bold;
}
@media screen and (max-width: 768px) {
    .finp {
        width : 100%;
    }
}
</style>
