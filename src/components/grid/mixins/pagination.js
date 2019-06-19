
export default {
    props: {
        /**
         * 是否开启分页
         */
        pageable: {
            type: Boolean,
            default: true
        }
    },
    methods: {

        onCurrentChange(evt) {
            console.log(evt);
        },

        onSizeChange(evt) {
            console.log(evt);
        }
    }
}
