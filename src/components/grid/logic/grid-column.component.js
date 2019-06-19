

export default {
    props: {
        field: String,

        label: String,

        width: Number,

        filterable: Boolean,

        lockable: Boolean,

        sortable: {
            type: Boolean,
            default: true
        },

        selectable: Boolean,

        resizable: Boolean,

        fixed: String


    }
}
