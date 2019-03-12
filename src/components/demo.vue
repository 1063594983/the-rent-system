<template>
    <div class="my-scroll" ref="myScroll" @scroll.passive="onScroll($event)">
        <span v-for="x in 20" :key="x">列表 {{ x }}</span>
    </div>
</template>

<script>
export default {
    methods: {
        onScroll(e) {
            console.dir(e.target.scrollTop);
        }
    }
}
</script>

<style scoped>
.my-scroll {
    height: 100px;
    border: 1 solid red;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
}
</style>
