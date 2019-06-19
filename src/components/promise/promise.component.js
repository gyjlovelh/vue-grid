
export default {
    props: {
        promise: {
            validator: p => p && typeof p.then === 'function' && typeof p.catch === 'function'
        }
    },
    data() {
        return {
            pending: true,
            data: null,
            error: null
        }
    },

    watch: {
        promise: {
            handler(promise) {
                // reset
                this.pending = true;
                this.error = null;
                this.data = null;

                this.promise.then(result => {
                    if (result.code === 200) {
                        this.data = result.data;
                        this.pending = false;
                    } else {
                        this.error = result.msg;
                        this.pending = false;
                    }
                }).catch(err => {
                    this.error = err.msg;
                    this.pending = false;
                })
            },
            deep: false,
            immediate: true
        }
    }
}
