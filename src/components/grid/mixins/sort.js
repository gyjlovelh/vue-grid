
export default {
    props: {
        sortable: {
            type: [Boolean, String],
            default: 'custom'
        }
    },
    data() {
        return {
            sort: null
        }
    },
    methods: {
        wafSortChange(event) {
            this.sort = event.order ? {
                filed: event.prop,
                dir: event.order === 'ascending' ? 'asc' : 'desc'
            } : null;

            this.publishDataSourceChange();
        }
    }
}
