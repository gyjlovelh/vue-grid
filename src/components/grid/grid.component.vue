<template>
    <div class="grid-wrap">
        <div class="grid-header-toolbar">
            <div class="grid-toolbar-left">
                <a class="selected-rows-num" href="">已选中数据 51 条</a>
            </div>

            <div class="grid-toolbar-right">

                <el-tooltip effect="light" content="导出" placement="top">
                    <a class="icon-item" href=""><i class="el-icon-picture"></i></a>
                </el-tooltip>

                <el-tooltip effect="light" content="导出" placement="top">
                    <a class="icon-item" href=""><i class="el-icon-s-grid"></i></a>
                </el-tooltip>

                <el-tooltip effect="light" content="导出" placement="top">
                    <a class="icon-item" href=""><i class="el-icon-setting"></i></a>
                </el-tooltip>

            </div>
        </div>

        <div class="grid-main">
            <el-table ref="wafGridComponent"
                      :data="dataSource"
                      :height="500"
                      :stripe="true"
                      :size="'small'"
                      :border="true"
                      :row-key="gridModel.records.$id"
                      @row-click="wafRowClick"
                      @selection-change="wafSelectionChange"
                      @sort-change="wafSortChange">

                <!-- 展开列 -->
                <waf-grid-detail-column v-slot="{row}">
                    <slot name="detail"></slot>
                </waf-grid-detail-column>
                <!-- 勾选框 -->
                <waf-grid-checkbox-column v-if="wafSelectable.enabled"></waf-grid-checkbox-column>
                <!-- 索引 -->
                <waf-grid-index-column v-if="showIndex" :customIndex="customIndex"></waf-grid-index-column>

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
                :background="pageable.pageType === 'background'"
                :page-size="pageSize"
                :current-page="pageNum"
                :page-sizes="pageable.pageSizes"
                :pager-count="pageable.pagerCount"
                :layout="pageable.layout"
                :total="gridModel.total"
                @current-change="wafCurrentChange"
                @size-change="wafSizeChange">
            </el-pagination>
        </div>
    </div>
</template>

<script src="./logic/grid.component.js"></script>

<style lang="scss">
.grid-wrap {
    margin: 0 30px;
    /*box-shadow: 1px 1px 10px #b3b3b3;*/
    border-radius: 3px;

    .grid-header-toolbar {
        display: flex;
        // 交叉轴对齐方式
        align-items: center;
        padding: 15px 20px;
        border: 1px solid #f3f3f3;
        border-radius: 3px;
        border-bottom: none;

        .grid-toolbar-left {
            flex: 1 1 auto;

            .selected-rows-num {
                font-size: 14px;
                text-decoration: none;
                color: #0d65df;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .grid-toolbar-right {
            flex: 1 1 auto;
            text-align: right;

            .icon-item {
                display: inline-block;
                width: 32px;
                height: 32px;
                line-height: 34px;
                text-align: center;
                border: 1px solid #ddd;
                border-radius: 3px;
                margin-right: 10px;

                i {
                    font-size: 18px;
                    color: #848484;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .grid-pagination {
        text-align: center;
        padding: 15px 5px;
    }

}
</style>


