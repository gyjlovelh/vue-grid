
export default {
    name: 'promise-vue.component',
    props: ['promise'],
    inheritAttrs: true,
    data() {
        return {
            gridModel: null
        }
    },

    watch: {
        promise: {
            handler(promise) {
                this.promise.then((data) => {
                    this.gridModel = data.data;
                })
            },
            deep: false,
            immediate: true
        }
    }
}
