<template>
    <div>
        <b-container fluid class="dark">
        
            <b-row class="p-2">
                <b-col md="3">
                
                </b-col>
                <b-col md="6" class="mt-4 p-3">
                    <h1 class="text-center">Welcome to vTodo</h1>
                    <h5 class="text-center">Your Best Web Todo App</h5>
                </b-col>
                <b-col md="3">
                
                </b-col>
            </b-row>
            <b-row class="p-4">
                <b-col md="3">
                    
                </b-col>
                <b-col md="6" class="middle mt-5">
                    <h2 class="p-2 hidd">Login to start Scheduling</h2>
                    <b-form @submit.prevent="logUser">
                        <b-form-group 
                            label="Login to start Scheduling"
                            class="text-center"
                        >
                        
                            <b-form-input
                                label="Login"
                                placeholder="Name"
                                class="p-4 m-2 w-75 mx-auto"
                                v-model="Uname"
                            ></b-form-input>
                            <b-button
                                type="submit"
                                class="p-3 w-50 m-3 lgbtn"
                                variant="secondary"
                            >Login</b-button>
                        </b-form-group>
                        
                
                    </b-form>
                </b-col>
                <b-col md="3">
                    
                </b-col>

            </b-row>
            <b-row class="">
                <b-col md="3">
                
                </b-col>
                <b-col md="6" class="mt-5 p-3 text-center">
                    Powered by Codemos Dev Community <b-icon-code-slash variant="light" font-scale="2"></b-icon-code-slash>
                    <p class="m-2">c 2020</p>
                </b-col>
                <b-col md="3">
                    
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
    export default {
        data() {
            return {
                Uname : ""
            }
        },
        created(){
            //alert(this.localStorage.name)
            if(this.localStorage.name != ''){
                this.setName(this.localStorage.name)
                //this.$router.push({
                  //  name : 'hello'
                //})
            }
        },
        methods : {
            ...mapActions(['setName']),
            logUser(){
                this.localStorage.name = this.Uname
                this.setName(this.localStorage.name)
                this.$router.push({
                    name : 'hello'
                })
            }
        },
        computed : {
            ...mapState(['name'])
        }
    }
</script>

<style scoped>
    .lgbtn{
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer
    }
    .lgbtn:hover{
        background-color: white;
        color: black;
    }
    .dark{
        background-color:darkslategrey;
        color:whitesmoke
    }
    .hidd{
        display: none;
    }
</style>