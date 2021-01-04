<template>
  <div>
    <b-container fluid class="cont">
      <b-row class="">
        <b-col cols="12" class="cola text-left p-3">
          <b-icon-arrow-left
            font-scale="2"
            class="cpoi"
            @click="goBack"
          ></b-icon-arrow-left>
        </b-col>
        <b-col cols="" class=""> </b-col>
        <b-col md="4"> </b-col>
      </b-row>
      <b-row class="">
        <b-col md="3"> </b-col>
        <b-col md="6" class="cola text-center">
          <div class="hellodiv">
            <p>Add New Task</p>
          </div>
        </b-col>
        <b-col md="3"> </b-col>
      </b-row>

      <b-row>
        <b-col md="3"> </b-col>
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

              <b-form-group class="mt-4">
                <b-form-input
                  type="text"
                  class="p-3"
                  v-model="newtask.task"
                  placeholder="What to do"
                ></b-form-input>
              </b-form-group>

              <b-form-group class="mt-4">
                <b-datepicker v-model="newtask.date"></b-datepicker>
              </b-form-group>
              <b-form-group class="mt-4">
                <b-timepicker v-model="newtask.time"></b-timepicker>
              </b-form-group>

              <b-form-group class="mt-4">
                <b-form-select v-model="newtask.session" :options="session" class="p-2">
                  <b-form-select-option value="null">
                    --Select Session--
                  </b-form-select-option>
                </b-form-select>
              </b-form-group>

              <b-form-group class="mt-5 text-center">
                <b-overlay
                  :show="addingtask"
                  rounded
                  opacity="0.6"
                  spinner-small
                  spinner-variant="primary"
                  class=""
                >
                  <b-button type="submit" :disabled="state" class="atb p-3 w-75"
                    >Add Task</b-button
                  >
                </b-overlay>
              </b-form-group>
            </b-form-group>
          </form>
        </b-col>
        <b-col md="3"> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      newtask: this.getForm(),
      session: ["Morning", "Afternoon", "Evening", "Before Bed"],
      curdate: new Date(),
      addingtask: false,
    };
  },
  created() {
    if (this.name.length == 0) {
      this.$router.push({
        name: "landing",
      });
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addTask() {
      this.addingtask = true;
      this.newtask.id = JSON.parse(localStorage.tasks).length + 1;

      if (this.localStorage.tasks) {
        console.log(this.localStorage.tasks);
        this.localStorage.tasks.push(this.newtask);
        this.addingtask = false

        this.newtask.categ = null
        this.newtask.task = ''
        this.newtask.date = ''
        this.newtask.time = ''
        this.newtask.session = null

      } else {
        this.localStorage.tasks = [];
        this.localStorage.tasks.push(this.newtask);
        this.addingtask = false

        this.newtask.categ = null
        this.newtask.date = ''
        this.newtask.task = ''
        this.newtask.time = ''
        this.newtask.session = null

      }
    },
    getForm() {
      return {
        id: "",
        categ: null,
        date: "",
        time: "",
        task: "",
        session: null,
        done: "No",
      };
    },
  },
  computed: {
    ...mapState({
      name: (state) => state.name,
      category: (state) => state.category,
    }),
    state() {
      if (
        this.newtask.categ == null ||
        this.newtask.session == null ||
        this.newtask.time.length == 0 ||
        this.newtask.date.length == 0 ||
        this.newtask.task.length == 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.fsi {
  padding: 20px;
}

.cpoi {
  cursor: pointer !important;
}

.hellodiv {
  font-size: 2rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.namehello {
  font-weight: bolder;
  font-family: "Courier New", Courier, monospace;
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
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
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
