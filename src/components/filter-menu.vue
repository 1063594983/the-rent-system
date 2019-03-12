<template>
    <div id="filter-menu">
        <span :class="filterItemClass[0]" @click="toggle(1)">附近<i :class="filterItemIconClass[0]"></i></span>
        <span :class="filterItemClass[1]" @click="toggle(2)">智能排序<i :class="filterItemIconClass[1]"></i></span>
        <span :class="filterItemClass[2]" @click="toggle(3)">筛选<i :class="filterItemIconClass[2]"></i></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            filterItemClass: [
                "filter-item",
                "filter-item",
                "filter-item"
            ],
            filterItemIconClass: [
                "el-icon-caret-bottom",
                "el-icon-caret-bottom",
                "el-icon-caret-bottom"
            ]
        }
    },
    computed: {
        filterMenuOpened() {
            return this.activeIndex != 0;
        }
    },
    methods: {
        toggle(index) {
            var type = ''
            if(this.activeIndex == 0) {
                this.$set(this.filterItemClass, (index - 1), "filter-item-active");
                
                this.$set(this.filterItemIconClass, (index - 1), "el-icon-caret-top");

                this.activeIndex = index;

                type = 'open'

                /*
                //触发打开事件
                this.$emit("panelOpen", index);
                */
            }
            else if(this.activeIndex == index) {
                this.$set(this.filterItemClass, (index - 1), "filter-item");

                this.$set(this.filterItemIconClass, (index - 1), "el-icon-caret-bottom");

                this.activeIndex = 0;

                type = 'close'

                /*
                //触发关闭事件
                this.$emit("panelClose");*/
            }
            else if(this.activeIndex != index) {
                this.$set(this.filterItemClass, (this.activeIndex - 1), "filter-item");
                this.$set(this.filterItemClass, (index - 1), "filter-item-active");

                this.$set(this.filterItemIconClass, (this.activeIndex - 1), "el-icon-caret-bottom");
                this.$set(this.filterItemIconClass, (index - 1), "el-icon-caret-top");

                this.activeIndex = index;

                type = 'switch'
                /*
                //触发切换事件
                this.$emit("panelSwitch", index);
                */
            }

            this.$emit('itemClick', index, type);
        }
    }
}
</script>

<style scoped>
#filter-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8ch;
    height: 20px;
}

.filter-item-active {
    color: green;
}
</style>
