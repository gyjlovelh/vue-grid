<template>
    <waf-promise :promise="promise">

        <template v-slot:pending>
            <waf-grid :gridModel="{records: [], total: 0}">

                <template v-slot:empty>
                    数据加载中...
                </template>

                <slot></slot>
            </waf-grid>
        </template>

        <template v-slot="{data}">
            <waf-grid :gridModel="data">
                <slot></slot>
            </waf-grid>
        </template>

        <template v-slot:error="{error}">
            <waf-grid :gridModel="{records: [], total: 0}">
                <template v-slot:empty>
                    <p>错误信息：{{error}} <a href="javascript:void(0)">刷新</a></p>
                </template>
                <slot></slot>
            </waf-grid>
        </template>

    </waf-promise>
</template>

<script src="./promise-vue.component.js"></script>

