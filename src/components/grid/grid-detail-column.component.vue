<template>
    <el-table-column type="expand">
        <template slot-scope="props">
            <slot :row="props.row" :column="props.column" :index="props.$index"></slot>
        </template>
    </el-table-column>
</template>

<script src="./logic/grid-column-column.component.js"></script>
