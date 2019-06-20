
export default {
    props: {
        field: String,

        label: String,

        width: Number,

        filterable: Boolean,

        lockable: Boolean,

        sortable: {
            type: [Boolean, String],
            default: 'custom'
        },

        selectable: Boolean,

        resizable: {
            type: Boolean,
            default: true
        },

        fixed: String,

        hidden: Boolean,

        /**
         * 是否可以改变排列位置位置
         */
        reorderable: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            columnSortable: 'custom'
        }
    },

    watch: {
        sortable: {
            immediate: true,
            handler(state) {
                // const _sortable = this.$parent.sortable;
                // if (_sortable === false) {
                //     this.columnSortable = false;
                // } else if (_sortable === true) {
                //     this.columnSortable = !!state;
                // } else if (_sortable === 'custom') {
                //     this.columnSortable = state;
                // }
            }
        }
    }
}
