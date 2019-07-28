<template>
<!-- 聊天内容组件 -->
    <div>
        <div v-for="(item, index) in dialogContent" :key="index">
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 聊天内容列表
        dialogContent: {
            type: Array,
            default: () => [
                {user: '马云', message: '你好'},
                {user: 'zxl', message: '你也好'}
            ]
        }
    }
}
</script>

<style scoped>

</style>
