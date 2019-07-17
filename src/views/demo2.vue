<template>
  <div>
    <div class="tip" :style="{height: top + 'px'}" v-if="state != 0">
      <div class="tip-text">{{ tip }}</div>
    </div>
    <div
      class="drag-panel"
      @touchstart="handleStart($event)"
      @touchmove="handleMove($event)"
      @touchend="handleEnd($event)"
      @scroll="handleScroll($event)"
      :style="{'transform': 'translateY(' + top + 'px)'}"
      ref="drag_panel" 
    >
    <div v-for="x in 100" :key="x">{{ x }}</div>
    </div>
  </div>
</template>

<script>
import MyScroll from "@/components/scroll";
/**
 * state: 0 - 初始 1 - 下拉 2 - 可释放 3 - 刷新
 */
export default {
  data() {
    return {
      startY: 0,
      touching: false,
      top: 0,
      state: 0,
      tip: "下拉"
    };
  },
  methods: {
     handleScroll(e) {
         console.log(e)
     },
    handleStart(e) {
      this.startY = e.targetTouches[0].pageY;
      this.touching = true;
      console.log(this.$refs.drag_panel)
    },
    handleMove(e) {
      if (!this.touching) {
        return;
      }

      let diff = e.targetTouches[0].pageY - this.startY;
      if (diff > 0) {
        e.preventDefault();
      } else {
        return;
      }

      this.state = 1; //下拉开始
      this.top = Math.floor(diff * 0.25) + (this.state === 2 ? 40 : 0);

      if (this.top > 40) {
        this.state = 2; //可释放
      }
    },
    handleEnd(e) {
      this.touching = false; // 判断抬起时的高度，是大于40 就开启刷新

      if (this.top >= 40) {
        this.refresh();
      } else {
        this.state = 0;
        this.top = 0;
      }
    },
    refresh() {
      this.state = 3; //正在刷新
      setTimeout(() => {
        this.state = 0; //刷新完成，回到初始状态
        this.top = 0;
      }, 100);
    }
  },
  watch: {
    state(newVal) {
      switch (newVal) {
        case 1:
          this.tip = "下拉刷新";
          return;
        case 2:
          this.tip = "释放立即刷新";
          return;
        case 3:
          this.tip = "正在刷新";
          return;
      }
    }
  },
  components: {
    MyScroll
  }
};
</script>

<style scoped>
.tip {
  text-align: center;
}
.drag-panel {
  border: 1px solid red;
  overflow-y: scroll;
}
</style>
