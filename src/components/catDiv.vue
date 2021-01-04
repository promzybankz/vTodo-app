<template>
<div>
    <div class="taskcatwrapper w-100 h-100 p-3" >
        <div class="ml-3 mt-4 tflex">
            <b-icon class="cicon mr-2" :icon="cat == 'Personal' ? 'person' : cat == 'Family' ? 'people' : cat == 'Work' ? 'tools' : cat == 'Home' ? 'house' : ''" font-scale="2"></b-icon>
            <div class="tasks pt-2">{{ cat }}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        cat: String
    },

    methods: {
        goCat(cate) {
            this.$router.push({
                name: 'category',
                params: {
                    category: cate
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
