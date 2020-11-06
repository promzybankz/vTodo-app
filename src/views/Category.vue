<template>
<div>
    <b-container fluid class="cont">

        <b-row class="">

            <b-col md="3">

            </b-col>
            <b-col md="6" class="cola text-right p-3 cpoi">
                <b-icon-filter-right variant="light" font-scale="3" @click="goCat('cat')"></b-icon-filter-right>
            </b-col>
            <b-col md="3">

            </b-col>
        </b-row>
        <b-row class="">
            <b-col md="3">

            </b-col>
            <b-col md="6" class="cola text-left">
                <div class="catediv ml-5">
                    <b-icon class="cicon mt-4" :icon="$route.params.category == 'Personal' ? 'person' : $route.params.category == 'Family' ? 'people' : $route.params.category == 'Work' ? 'tools' : $route.params.category == 'Home' ? 'house' : ''" font-scale="0.7"></b-icon>
                    <p class="ccat">{{ $route.params.category }}</p>
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
                            All
                        </div>

                    </b-col>
                    <b-col class="p-3 text-left">
                        <div class="ml-5 tflex">
                            Today
                        </div>

                    </b-col>
                    <b-col class="p-3">
                        <div class="ml-5 tflex">
                            Tomorrow
                        </div>

                    </b-col>
                </b-row>

                <b-row>

                </b-row>
            </b-col>
            <b-col md="3">

            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import {
    mapState
} from "vuex"

export default {
    data() {
        return {

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

.catediv {
    display: flex;
    font-size: 3rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.cicon {
    width: 20%;
}

.ccat {
    width: 80%;
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
    bottom: 1px;
    right: 1px;
    background-color: red;
    width: 60px;
    height: 40px;
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

.taskscat {
    height: 150px;
    cursor: pointer;

}

.taskcatwrapper {

    border-radius: 20px 20px;
    background-color: rgb(13, 53, 70);

}
</style>
