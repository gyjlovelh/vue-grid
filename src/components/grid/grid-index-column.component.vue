<template>
    <el-table-column type="index" :label="label"></el-table-column>
</template>

<script>
    export default {
        name: "grid-index-column.component",
        props: {
            label: {
                type: String,
                default: '序号'
            }
        }
    }
</script>

<style scoped>

</style>
