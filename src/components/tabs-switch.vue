<template>
  <div>
    <div class="tab-content">
        <router-view/>
    </div>
    <div class="footer">
      <div
        v-for="(item, index) in footerItems"
        :key="index"
        :class="[tableIndex == index ? 'footer-item-active' : 'footer-item']"
        @click="tableIndex = index"
      >
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import UpDownLayout from '@/components/up-down-layout'
export default {
  props: {
		footerItems: {
			type: Array,
			default: [{
				title: 'title1',
				url: 'house-source'
			}, {
				title: 'title2',
				url: 'my-order'
			}, {
				title: 'title3',
				url: 'user-center'
			}]
		}
  },
  data() {
    return {
      tableIndex: 0
    };
  },
  methods: {
    handleSelectSort(x) {
      this.selectSortKey = x - 1;
    }
  },
  created() {
      var cur = this.$route.name;
			var index = 0;
			for (var value of this.footerItems) {
				if (value.url == cur) {
					break;
				}
			}
      this.tableIndex = index;
  },
  watch: {
      tableIndex(newVal) {
          this.$router.push({
              name: this.footerItems[newVal].url
          });
      }
  },
  components: {
      UpDownLayout
  }
};
</script>

<style scoped>
.tab-content {
  border: 1px solid red;
  margin-bottom: 60px;
}

.footer {
  width: 100%;
  height: 57px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  margin: 0 -8px;
  padding: 0 16px;
  box-sizing: border-box;
  border-top: 2px solid antiquewhite;
  background-color: aliceblue;
  z-index: 100;
}

.footer-item {
  display: flex;
  width: 33%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}

.footer-item-active {
  border-radius: 10px;
  display: flex;
  color: white;
  width: 33%;
  height: 80%;
  align-items: center;
  justify-content: space-around;
  background: rgb(83, 93, 231);
}
</style>
