<template>
    <div>
        <b-container fluid class="cont">
            <b-row class="">
                <b-col md="3">
                
                </b-col>
                <b-col md="6" class="cola text-right p-3">
                    <b-icon-filter-right variant="dark" font-scale="3"></b-icon-filter-right>
                </b-col>
                <b-col md="3">
                
                </b-col>
            </b-row>
            <b-row class="">
                <b-col md="3">
                
                </b-col>
                <b-col md="6" class="cola text-left">
                    <div class="hellodiv ml-5">
                        <p>Hello</p>
                        <p class="namehello">{{ name }}</p>
                        <p class="datehello">Saturday, 18th July</p>
                    </div>
                </b-col>
                <b-col md="3">
                
                </b-col>
            </b-row>
            

            <b-row>
                <b-col md="3">
                
                </b-col>
                <b-col md="6" class="cola text-left">
                    <b-card well>
                    jj

                    
                    </b-card>
                </b-col>
                <b-col md="3">
                
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapState } from "vuex"

    export default {
        data(){
            return {

            }
        },
        methods : {
            
        },
        computed : {
            ...mapState({
                name : state => state.name
            })
        }

    }
</script>

<style scoped>
    .cola{
        
    }
    .hellodiv{
        font-size: 3rem;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .namehello{
        font-weight: bolder;
        font-family:'Courier New', Courier, monospace;
        margin-top: -25px;
    }
    .datehello{
        font-size: 16px;
        margin-top : -30px;
    }
</style>