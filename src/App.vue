<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </transition>
    </keep-alive>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import CommonHeader from "@/components/common-header";
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    //使用watch监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引，判断为前进状态，反之则为后退状态
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else if(to.meta.index < from.meta.index) {
        this.transitionName = "slide-right";
      }
    }
  },
  components: {
    CommonHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
