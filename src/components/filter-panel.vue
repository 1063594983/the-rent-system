<template>
<div>
    <div v-show="panelIndex == 1" class="filter-panel-1">
        <div class="left-menu">
            <span v-for="x in 20" :key="x" @click="selectPart(x)" :class="[activePartKey == x ? 'part-item-active' : 'part-item']">
                附近<i v-show="activePartKey == x" class="el-icon-arrow-right"></i>
            </span>
        </div>
        <div class="right-menu">
            <span v-for="x in 10" :key="x" @click="selectPlace(x)" :class="[activePlaceKey == x ? 'place-item-active' : 'place-item']">
                地点{{ x }}
            </span>
        </div>
    </div>
    <div v-show="panelIndex == 2" class="filter-panel-2">
        <span :class="[activeSortKey == 1 ? 'panel-2-item-active' : 'panel-2-item']" @click="selectSort(1)">智能排序</span>
        <span :class="[activeSortKey == 2 ? 'panel-2-item-active' : 'panel-2-item']" @click="selectSort(2)">离我最近</span>
        <span :class="[activeSortKey == 3 ? 'panel-2-item-active' : 'panel-2-item']" @click="selectSort(3)">好评优先</span>
    </div>
</div>
    
</template>

<script>

export default {
    data() {
        return {
            filterPanelClass: 'filter-panel-show',
            activePartKey: 1,
            activePlaceKey: 1,
            activeSortKey: 1
        }
    },
    props: {
        panelContent: {
            type: Object
        },
        panelIndex: {
            type: Number
        }
    },
    methods: {
        selectPart(x) {
            if(this.activePartKey != x) {
                this.activePlaceKey = 1
            }
            this.activePartKey = x;
        },
        selectPlace(x) {
            this.activePlaceKey = x;
        },
        selectSort(x) {
            this.activeSortKey = x;
            this.$emit('selectSort', x);
            console.log(x)
        }
    }
}
</script>

<style scoped>
.filter-panel-1 {
    display: flex;
    flex-direction: row;
    width: inherit;
    height: 200px;
    box-shadow: 2px 2px 3px #888888;
    /*background-color: transparent;*/
}

.filter-panel-2 {
    display: flex;
    flex-direction: column;
    width: inherit;
    text-align: center;
    line-height: 30px;
}

.panel-2-item {
    height: 50px;
}

.panel-2-item-active {
    height: 50px;
    color: green;
}

.left-menu {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}

.left-menu::-webkit-scrollbar {
    display: none;
}

.right-menu {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}

.right-menu::-webkit-scrollbar {
    display: none;
}

.part-item {
    width: 150px;
    line-height: 40px;
    font-size: 15px;
    text-align: left;
}

.part-item-active {
    width: 150px;
    line-height: 40px;
    font-size: 15px;
    text-align: left;
    color: green;
}

.place-item {
    line-height: 40px;
    font-size: 15px;
    text-align: 15px;
}

.place-item-active {
    line-height: 40px;
    font-size: 15px;
    color: green;
}
/*
@keyframes myFirst {
    from {
        height: 0px;
    }
    
    to {
        height: 200px;
    }
}

.filter-panel {
    border: 1px solid red;
    display: none;
}

.filter-panel-show {
    border: 1px solid red;
    display: block;
    height: 200px;
    position: fixed;
    width: 100%;
    background: #ffffff;
    animation: myFirst 1s;
    overflow: hidden;
}
*/
</style>
