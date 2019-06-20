import pagination from '../mixins/pagination';
import sort from '../mixins/sort';
import selection from '../mixins/selection';

import uuid from 'uuid';

export default {
    props: {
        gridModel: {
            type: Object,
            validator(model) {
                return model && Array.isArray(model.records) && typeof model.total === 'number';
            }
        },
        showIndex: Boolean,
        customIndex: {
            type: Function,
            default: i => i
        },

        detailSlot: Boolean,

        filterable: Boolean,
        resizable: Boolean,
        reorderable: Boolean
    },
    mixins: [pagination, sort, selection],
    data () {
        return {
            /** 数据源 */
            dataSource: []
        }
    },

    created() {
        console.log('selectable', this.wafSelectable);

        console.log('$slot', this.$slots)
    },

    methods: {

        publishDataSourceChange() {
            this.$emit('dataSourceChange', {
                pager: {
                    pageSize: this.pageSize,
                    pageNum: this.pageNum,
                    skip: this.skip
                },
                filters: [],
                sort: this.sort
            });
        },

        wafRowClick(row) {
            if (!this.wafSelectable.checkboxOnly) {
                // 联动checkbox
                this.$refs.wafGridComponent.toggleRowSelection(row, !this.selectedList.find(item => item.$id === row.$id));
            }
        }
    },

    watch: {
        gridModel: {
            handler(model) {
                this.dataSource = model.records;

                this.dataSource.forEach(item => {
                    item.$id = uuid();
                    // Reflect.defineProperty(item, '$id', {
                    //     get() {
                    //         return uuid();
                    //     },
                    //     enumerable: false
                    // });

                    // Reflect.defineProperty(item, '$selected', {
                    //     enumerable: false
                    // });
                })
            },
            immediate: true
        }
    }
}
