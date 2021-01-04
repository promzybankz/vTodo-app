<template>
<div>
    <b-container fluid class="cont">

        <b-row class="">

            <b-col md="3">

            </b-col>
            <b-col md="6" class="cola text-right p-3 cpoi">
                <b-icon-filter-right variant="light" font-scale="3"></b-icon-filter-right>
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
                    <p class="datehello">{{ new Date() | moment("dddd, MMMM Do YYYY") }}</p>
                </div>
            </b-col>
            <b-col md="3">

            </b-col>
        </b-row>

        <b-row>
            <b-col md="3">

            </b-col>

            <b-button class="btrt text-center" @click="addTask">
                <b-icon-plus variant="light" font-scale="2"></b-icon-plus>
            </b-button>

            <b-col md="6" class="cola text-left">
                <b-row class="ntask">
                    <b-col class="p-3">
                        <div class="ml-5 tflex">
                            <div class="count pr-2">{{ taskcreated }}</div>
                            <div class="tasks">Created <br> Tasks</div>
                        </div>

                    </b-col>
                    <b-col class="p-3 text-left">
                        <div class="ml-5 tflex">
                            <div class="count pr-2">{{ taskdone }}</div>
                            <div class="tasks">Completed <br>Tasks</div>
                        </div>

                    </b-col>
                </b-row>

                <b-row>

                    <div class="dispflex">
                        <div class="text-center p-1 taskscat m-2" v-for="(cat, index) in category" :key="index">
                            <div class="taskcatwrapper w-100 h-100 p-3" @click="goCat(cat)">
                                <div class="ml-3 mt-4 tflex">
                                    <b-icon class="cicon mr-2" :icon= "cat == 'Personal' ? 'person' : cat == 'Family' ? 'people' : cat == 'Work' ? 'tools' : cat == 'Home' ? 'house' : cat == 'School' ? 'book' : ''" font-scale="2"></b-icon>
                                    <div class="tasks pt-2">
                                        {{ cat }}
                                        <p>{{ localStorage.tasks.filter(x => x.categ == cat).length}} Task{{ localStorage.tasks.filter(x => x.categ == cat).length > 1 ? 's' : '' }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </b-row>
            </b-col>
            <b-col md="3">

            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
//import catDiv from '@/components/catDiv'
import {
    mapState
} from "vuex"

export default {
    components: {
        //catDiv
    },
    data() {
        return {
            taskcreated : JSON.parse(localStorage.tasks).length,
            taskdone : JSON.parse(localStorage.tasks).filter(x => x.done == 'Yes').length
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

        addTask() {
            this.$router.push({
                name: 'addtask'
            })
        },
        goCat(cate) {
            this.$router.push({
                name: 'category',
                params: {
                    category: cate
                }
            })
        }
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
.cpoi {
    cursor: pointer !important
}

.cont {
    color: white
}

.hellodiv {
    font-size: 3rem;
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

.btrt {
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: red;
    width: 70px;
    height: 50px;
    border-top-left-radius: 20px;
    cursor: pointer;
    z-index: 100;
    border: 0px
}

.btrt:hover {
    background-color: rgba(224, 70, 70, 0.857);
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

.ntask {
    background-color: rgba(105, 107, 105, 0.122);
}
.dispflex{
    display : flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}


.taskscat {
    width: 45%;
    height: 150px;
    cursor: pointer;
    display: flex
}

.taskcatwrapper {

    border-radius: 20px 20px;
    background-color: rgb(13, 53, 70);

}

</style>
