<template>

    <el-table-column v-if="!hidden" :prop="field"
                     :label="label"
                     :width="width || 250"

                     :filterable="filterable"
                     :resizable="!fixed && resizable"
                     :fixed="fixed"
                     :sortable="!fixed && columnSortable">
        <slot></slot>

    </el-table-column>
</template>

<script src="./logic/grid-column.component.js"></script>

<style scoped></style>
