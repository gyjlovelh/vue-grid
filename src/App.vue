<template>
    <div id="app">
        <waf-promise-grid :promise="httpPromise">

            <waf-grid-index-column label="序号"></waf-grid-index-column>

            <waf-grid-detail-column v-slot="{row}">
                <p>this is detail {{row}}</p>
            </waf-grid-detail-column>

            <!--<waf-grid-index-column></waf-grid-index-column>-->

            <waf-grid-checkbox-column></waf-grid-checkbox-column>

            <waf-grid-column field="name" label="姓名" :width="300"></waf-grid-column>

            <waf-grid-column field="date" label="生日" :width="300"></waf-grid-column>

            <waf-grid-column field="address" label="住址" :width="300"></waf-grid-column>

            <waf-grid-column fixed="right" label="操作">
                <button>edit</button>
            </waf-grid-column>
        </waf-promise-grid>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                gridModel: {},
                httpPromise: null
            }
        },

        created() {
            this.httpPromise = new Promise((resolve, reject) => {
                setTimeout(() => {

                    this.gridModel = {
                        records: Array(100).fill(0).map((a, index) => {
                            let item = {};
                            item.date = '2016-05-02' + Math.floor(Math.random() * 100);
                            item.name = '王小虎';
                            item.address = '上海市普陀区金沙江路 1518 弄';
                            return item;
                        }),
                        total: 470
                    };

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
                }, 2000);
            });



        }
    }
</script>

<style lang="scss">


</style>
