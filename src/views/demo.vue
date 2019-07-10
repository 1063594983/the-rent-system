<template>
<div class="filter-panel">
   <div class="menu">
       <div v-for="(menu, index) in filterMenuList" :key="index" class="menu-item" 
        :class="{'active' : selectedMenu == index}" @click="selectedMenu = index">
           {{ menu.menu }}
       </div>
   </div>
   <div class="items">
       <transition name="float-up">
           <div>
               <div v-for="(item, index) in selectedItems" :key="index" class="items-content">
                    {{ item }}
                </div>
           </div>
           
       </transition>
       
   </div>
</div>
    
</template>

<script>

export default {
    data() {
        return {
            selectedMenu: 0,
            filterMenuList: [{
                menu: "附近",
                items: [
                    "附近",
                    "500",
                    "1km"
                ]
            }, {
                menu: "临川区",
                items: [
                    "全部",
                    "人民公园",
                ]
            }],
            selectedItems: []
        }
    },
    created() {
        this.selectedItems = this.filterMenuList[this.selectedMenu].items;
    },
    watch: {
        selectedMenu(newVal, oldVal) {
            if (newVal == oldVal) {
                return;
            }
            this.selectedItems = this.filterMenuList[this.selectedMenu].items;
        }
    }
}
</script>

<style scoped>
.filter-panel {
    border: 1px solid red;

    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: start;

    box-shadow: 2px 2px 3px #888888;
}

.filter-panel .menu{
    border: 1px solid red;

    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.filter-panel .menu .menu-item {
    display: block;

    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.active {
    color: red;
} 

.filter-panel .items {
    border: 1px solid red;

    overflow-y: auto;
    flex: 2;
    display: flex;
    flex-direction: column;
}

.filter-panel .items .items-content {
    display: block;

    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.float-up-enter-active,
.float-up-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.float-up-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.float-up-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.float-up-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.float-up-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
