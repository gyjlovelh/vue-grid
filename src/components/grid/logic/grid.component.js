import pagination from '../mixins/pagination';

export default {
    props: {
        gridModel: Object,

        filterable: Boolean,

        sortable: Boolean,

        selectable: Boolean,

        resizable: Boolean,
        reorderable: Boolean
    },
    mixins: [pagination],
    data () {
        return {}
    }
}
