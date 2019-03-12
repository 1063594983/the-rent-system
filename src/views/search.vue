<template>
    <div class="search">
        <div class="search-bar">
            <div class="left">
                <i class="el-icon-arrow-left" @click="$router.push('/user-index')">返回</i>
            </div>
            <div class="input">
                <el-input placeholder="请输入搜索内容" 
                    size="large" class="search-input" ref="search"
                    v-model="searchWord" clearable>
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
            <div class="right" @click="$router.push('/search-result')">
                搜索
            </div>
        </div>
        <div class="before-search-content" v-if="searchWord == ''">
            <div class="hot-search">
                <div class="title">
                    热门搜索
                </div>
                <div class="content">
                    <el-tag class="tag" v-for="x in 10" :key="x" type="info" size="mini">标签三</el-tag>
                </div>
            </div>
            <div class="history-search">
                <div class="title">
                    历史记录
                </div>
                <div class="content">
                    <el-tag class="tag" v-for="x in 10" :key="x" type="info" size="mini">标签三</el-tag>
                </div>
            </div>
        </div>
        <autocomplete-panel v-else></autocomplete-panel>
    </div>
</template>

<script>
import autocompletePanel from '@/components/search-autocomplete-panel';

export default {
    data() {
        return {
            searchWord: ""
        }
    },
    created() {
        //this.$refs['searchInput'].focus();
        
    },
    mounted() {
        this.$refs.search.focus();
    },
    components: {
        autocompletePanel
    }
}
</script>

<style scoped>
.search-bar {
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /*border: 1px solid red;*/
}

.left {
    color: #909399;
    /*border: 1px solid red;*/
}

.input {
    /*border: 1px solid red;*/
    position: absolute;
    right: 50px;
    width: 70%;
}

.right {
    font-size: 15px;
}
.search-input {
    width: 100%;
    /*float: right;*/
    /*border: 1px solid red;*/
}

.before-search-content {
    width: 100%;
    display: flex;
    flex-direction: column;

}

.title {
    line-height: 30px;
    height: 30px;
}

.tag {
    margin-left: 15px;
    margin-top: 10px;
}


</style>
