<template>
    <div class="after-search-content" ref="content">
            <div v-for="x in 20" :key="x">
                <div class="line">
                    <div>
                        <el-icon class="el-icon-search" style="color: #909399"></el-icon>
                    </div>
                    <div style="margin-left: 10px;">
                        内容
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    mounted() {
        this.$refs['content'].style.height = (window.innerHeight - 80) + 'px';
    }
}
</script>

<style scoped>
.after-search-content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-y: scroll;
    height: 500px;
}

.line {
    /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);*/
    box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.1);
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
