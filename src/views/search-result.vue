<template>
    <div class="seach-result">
        <div class="header">
            <div class="left">
                <i class="el-icon-arrow-left" @click="$router.go(-1)">返回</i>
            </div>
            <div class="input">
                <el-input size="large" class="search-input" ref="search"
                    v-model="searchWord" clearable>
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
        </div>
        <rent-info-list :num="10" :card-list="cardList"></rent-info-list>
    </div>
</template>

<script>
import rentInfoList from '@/components/rent-info-list'

import cardList from '@/data/cardList.json'

export default {
    data() {
        return {
            searchWord: '搜索内容',
            cardList
        }
    },
    components: {
        rentInfoList
    }
}
</script>

<style scoped>
.header {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.left {
    color: #909399;
}

.input {
    position: fixed;
    right: 5px;
    width: 80%;
}

</style>
