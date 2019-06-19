import pagination from '../mixins/pagination';
import uuid from 'uuid';

export default {
    props: {
        gridModel: {
            type: Object,
            validator(model) {
                return model && Array.isArray(model.records) && typeof model.total === 'number';
            }
        },

        filterable: Boolean,

        sortable: Boolean,

        selectable: Boolean,

        resizable: Boolean,
        reorderable: Boolean
    },
    mixins: [pagination],
    data () {
        return {
            /** 数据源 */
            dataSource: [],
            /** 已选择Id集合 */
            selectedIds: []
        }
    },

    methods: {

        /**
         *
         * @param list
         */
        wafSelectionChange(list) {
            let selectedRows = [],
                deselectedRows = [];
            if (list.length > this.selectedIds.length) {
                // 勾选
                selectedRows = list.find(item => !this.selectedIds.find(id => id === item.$id));
            } else {
                // 去选
                deselectedRows = this.selectedIds.find(id => !list.find(item => item.$id === id));
            }

            console.log({
                deselectedRows,
                selectedRows
            });
            // this.$emit()
        }
    },

    watch: {
        gridModel: {
            handler(model) {
                this.dataSource = model.records;

                this.dataSource.forEach(item => {
                    Reflect.defineProperty(item, '$id', {
                        get() {
                            return uuid();
                        },
                        enumerable: false
                    });
                })
            },
            immediate: true
        }
    }
}
