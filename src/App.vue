<template>
    <div id="app">
        <waf-promise-grid :promise="httpPromise"
                          :showIndex="true"
                          :customIndex="customIndex"
                          :selectable="selectable"
                          :selectedKeys="selectedKeys"
                          :detail-slot="false"
                          gridSelectBy="id"

                          @selectedChange="onSelectedChange"
                          @selectedKeysChange="onSelectedKeysChange"
                          @dataSourceChange="onDataSourceChange">

            <waf-grid-column field="name" label="姓名" :width="300"></waf-grid-column>

            <waf-grid-column field="date" label="生日" :width="300"></waf-grid-column>

            <waf-grid-column field="address" label="住址" :width="300"></waf-grid-column>

            <waf-grid-column fixed="right" label="操作">
                <button>edit</button>
            </waf-grid-column>

            <template v-slot:detail="{row}">
                <p>this is detail {{row}}</p>
            </template>

            <template v-slot:toolbar-right>
                <button>save</button>
            </template>
        </waf-promise-grid>
    </div>
</template>

<script>
    import uuid from 'uuid';

    export default {
        data() {
            return {
                gridModel: {},
                httpPromise: null,
                selectedKeys: [],
                selectable: {
                    checkboxOnly: true,
                    // mode: 'single',
                    enabled: true
                }
            }
        },

        created() {
            this.httpPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let selectedKeys = [];
                    this.gridModel = {
                        records: Array(20).fill(0).map((a, index) => {
                            let item = {};
                            item.id = uuid.v4();
                            item.date = '2016-05-02' + Math.floor(Math.random() * 100);
                            item.name = '王小虎';
                            item.address = '上海市普陀区金沙江路 1518 弄';

                            if (index % 3 === 0) {
                                selectedKeys.push(item.id);
                            }

                            return item;
                        }),
                        total: 470
                    };
                    this.selectedKeys = selectedKeys;

                    resolve({
                        code: 200,
                        data: this.gridModel,
                        msg: 'success'
                    })

                    // resolve({
                    //     code: 404,
                    //     data: [],
                    //     msg: 'cuowu la'
                    // })
                }, 1000);
            });
        },

        methods: {
            customIndex(i) {
                return 'index' + i;
            },
            onDataSourceChange(event) {
                console.log('onDataSourceChange', event);
            },

            onSelectedChange(event) {
                // console.log('onSelectedChange', event);
            },

            onSelectedKeysChange(event) {
                console.log('onSelectedKeysChange', event);
            }
        }
    }
</script>

<style lang="scss">
#app {
    padding: 50px 0;
}

</style>
