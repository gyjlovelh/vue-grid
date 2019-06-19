<template>

    <el-table-column :prop="field"
                     :label="label"
                     :width="width || 250"

                     :filterable="filterable"
                     :resizable="resizable"
                     :fixed="fixed"
                     :sortable="sortable">
        <slot></slot>
    
    </el-table-column>
</template>

<script src="./logic/grid-column.component.js"></script>

<style scoped></style>
