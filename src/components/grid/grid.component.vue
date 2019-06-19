<template>
    <div class="grid-wrap">
        <div class="grid-header-toolbar">
            <div class="grid-toolbar-left">
                已勾选数据 <a >51</a> 条
            </div>

            <div class="grid-toolbar-right">
                <el-button size="small">新 增</el-button>
            </div>
        </div>

        <div class="grid-main">
            <el-table :data="gridModel.records"
                      :height="500"
                      :stripe="false"
                      :size="'small'"
                      :border="false">

                <!-- <el-table-column type="index" width="60"></el-table-column> -->

                <slot></slot>

                // 暂无数据时；
                <template v-slot:empty>
                    <slot name="empty"></slot>
                </template>
            </el-table>
        </div>

        <div v-if="pageable" class="grid-pagination">
            <el-pagination
                hide-on-single-page
                layout="total, sizes, prev, pager, next, jumper"
                :total="gridModel.total"
                @current-change="onCurrentChange"
                @size-change="onSizeChange">
            </el-pagination>
        </div>
    </div>
</template>

<script src="./logic/grid.component.js"></script>

<style lang="scss">
.grid-wrap {
    margin: 0 30px;

    .grid-header-toolbar {
        display: flex;
        padding: 15px 5px;
        border-bottom: 1px solid #ccc;

        .grid-toolbar-left {
            flex: 1 1 auto;
        }

        .grid-toolbar-right {
            flex: 1 1 auto;
        }
    }

    .grid-pagination {
        text-align: center;
        padding: 15px 5px;
    }

}
</style>


