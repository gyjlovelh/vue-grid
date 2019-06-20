<template>
    <el-table-column type="index" :width="80" :index="customIndex" :label="label"></el-table-column>
</template>

<script>
    export default {
        name: "grid-index-column.component",
        props: {
            label: {
                type: String,
                default: '序号'
            },
            customIndex: {
                type: Function,
                default: i => i
            }
        }
    }
</script>

<style scoped>

</style>
