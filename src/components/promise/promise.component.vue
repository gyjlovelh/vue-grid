<template>
    <div>

        <slot v-if="pending" name="pending"></slot>

        <slot v-if="data" :data="data"></slot>

        <slot v-if="error" name="error" :error="error"></slot>
    </div>
</template>

<script src="./promise.component.js"></script>
