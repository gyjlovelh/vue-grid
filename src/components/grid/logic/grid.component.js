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
        return {}
    },

    methods: {

        /**
         *
         * @param event
         */
        wafSelectionChange(event) {
            console.log(event);
            // this.$emit()
        }
    },

    watch: {
        gridModel: {
            handler(model) {
                model.records.forEach(item => {
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
