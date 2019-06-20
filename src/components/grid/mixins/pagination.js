
const defaultPager = {
    // 页码按钮的数量
    pagerCount: 9,
    // 分页尺寸配置
    pageSizes: [10, 20, 50, 100],
    // 分页按钮类型  'background' | 'none'
    pageType: 'none',
    // 分页布局
    layout: 'total, sizes, prev, pager, next, jumper'
};

export default {
    props: {
        /**
         * 是否开启分页
         */
        pageable: {
            type: [Boolean, Object],
            default: () => defaultPager
        }
    },
    data() {
        return {
            // 数据偏移量
            skip: 0,
            // 类似于take
            pageSize: 20,
            // 当前页码
            pageNum: 0
        }
    },
    methods: {
        /**
         * 页码发生变化
         * @param evt
         */
        wafCurrentChange(evt) {
            this.pageNum = evt;
            this.skip = this.pageSize * (this.pageNum - 1);
            this.publishDataSourceChange();
        },
        /**
         * 分页尺寸发生变化
         * @param evt
         */
        wafSizeChange(evt) {
            this.pageSize = evt;
            this.skip = this.pageSize * (this.pageNum - 1);
            this.publishDataSourceChange();
        }
    },

    watch: {
        pageable: {
            handler(pager) {
                if (pager === true) {
                    this.pageable = defaultPager;
                }
            },
            immediate: true
        }
    }
}
