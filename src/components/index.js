import WafPromiseComponent from './promise/promise.component.vue';
import WafGridComponent from './grid/grid.component.vue';
import WafGridColumnComponent from './grid/grid-column.component.vue';
import WafGridCheckboxColumnComponent from './grid/grid-checkbox-column.component.vue';
import WafGridDetailColumnComponent from './grid/grid-detail-column.component.vue';
import WafGridIndexColumnComponent from './grid/grid-index-column.component.vue';

import WafPromiseGridComponent from './promise-grid/promise-vue.component.vue';

const components = {
    'waf-promise': WafPromiseComponent,
    'waf-grid': WafGridComponent,
    'waf-grid-column': WafGridColumnComponent,
    'waf-grid-checkbox-column': WafGridCheckboxColumnComponent,
    'waf-grid-detail-column': WafGridDetailColumnComponent,
    'waf-grid-index-column': WafGridIndexColumnComponent,
    'waf-promise-grid': WafPromiseGridComponent
};

const install = function (Vue) {
    // 注册全局组件
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
};

export default install;
