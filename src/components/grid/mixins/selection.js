import uuid from "uuid";

const defaultSelection = {
    // true: 只能通过点击checkbox选中。false: 点击行也可以选中
    checkboxOnly: true,
    // 勾选模式  single:互斥  multiple:多选
    mode: 'multiple',
    // 是否允许勾选行
    enabled: true
};

export default {
    props: {
        /**
         * 表格勾选功能设置
         */
        selectable: {
            type: [Boolean, Object],
            default: () => defaultSelection
        },
        /**
         * 是否显示勾选全部checkbox
         */
        showSelectAll: {
            type: Boolean,
            default: true
        },
        /**
         * 行数据主键
         */
        gridSelectBy: String,
        /**
         * 初始化勾选状态
         */
        selectedKeys: {
            type: Array
        }
    },

    data() {
        return {
            pending: false,
            wafSelectable: defaultSelection,
            /** 已选择Id集合 */
            selectedList: []
        }
    },

    methods: {
        /**
         * 全选/勾选/去选 时间
         * @param list 当前页勾选集合
         */
        wafSelectionChange(list) {
            if (this.pending) {
                return;
            }
            let selectedRows = [], deselectedRows = [], totalSelectedRows = [];
            if (this.wafSelectable.mode === 'single') {
                // 单选模式
                if (list.length >= 2) {
                    selectedRows = list.filter(item => !this.selectedList.find(el => el.$id === item.$id));
                    this.selectedList = [];
                    // todo 使用 clearSelection 会导致推送一次全部为空的错误数据
                    this.$refs.wafGridComponent.clearSelection();
                    this.$refs.wafGridComponent.toggleRowSelection(selectedRows[0], true);
                    return;
                } else if (list.length === 1) {
                    selectedRows = list;
                } else {
                    deselectedRows = [...this.selectedList];
                }
            } else {
                // 多选模式
                if (list.length > this.selectedList.length) { // 勾选
                    selectedRows = list.filter(item => !this.selectedList.find(el => el.$id === item.$id));
                } else { // 去选
                    deselectedRows = this.selectedList.filter(el => !list.find(item => item.$id === el.$id));
                }
            }
            this.selectedList = totalSelectedRows = [...list];

            // 推送主键集合
            this.$emit('selectedKeysChange', {
                selectedRows: selectedRows.map(item => item[this.gridSelectBy]),
                deselectedRows: deselectedRows.map(item => item[this.gridSelectBy]),
                totalSelectedRows: totalSelectedRows.map(item => item[this.gridSelectBy])
            });
            // 推送行数据集合
            this.$emit('selectedChange', { selectedRows, deselectedRows, totalSelectedRows });
        },
    },

    watch: {
        selectable: {
            immediate: true,
            handler(model) {
                if (typeof model === 'object') {
                    // 后面的覆盖前面的
                    this.wafSelectable = Object.assign(this.wafSelectable, model);
                } else {
                    this.wafSelectable.enabled = model;
                }
            }
        },

        selectedKeys: {
            immediate: true,
            handler(keys) {
                if (!this.gridSelectBy) {
                    throw new Error('gridSelectBy cannot be ' + this.gridSelectBy);
                } else {
                    this.pending = true;
                    setTimeout(() => {
                        this.$refs.wafGridComponent.doLayout();
                        // todo 此处由于js机制致使初始化勾选状态不生效
                        keys.forEach(key => {
                            const row = this.dataSource.find(item => item[this.gridSelectBy] === key);
                            this.$refs.wafGridComponent.toggleRowSelection(row, true);
                        });
                        setTimeout(() => {
                            this.pending = false;
                            this.selectedList = this.dataSource.filter(item => keys.includes(item[this.gridSelectBy]));

                            let columnInfo = [];
                            this.$refs.wafGridComponent.$children.forEach((child, index) => {
                                if (child.reorderable) {
                                    // columnInfo.push({
                                    //     index,
                                    //     component: child
                                    // })
                                    columnInfo.push(child);
                                }
                            });

                            console.log(columnInfo);
                        }, 100);
                    }, 200);

                }
            }
        }
    }
}
