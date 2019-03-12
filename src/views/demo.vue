<template>
    <div class="index">
        <i class="el-icon-more"></i>
        <el-button @click="show"></el-button>
    </div>
</template>

<script>
import myScroll from '@/components/scroll'
import demo from '@/components/demo'

export default {
    data() {
        return {
            list: [],
            page: {
                counter: 1,
                pageStart: 1,
                pageEnd: 1,
                total: 10
            }
        }
    },
    methods: {
        show() {
            console.log(this.$Contract)
        },
        onRefresh(mun) {//刷新回调
            setTimeout(() => {
                this.$refs.myScroll.setState(3);
            }, 500)
        },
        onPull(mun) {//加载回调
            if(this.page.counter <= this.page.total) {
                setTimeout(() => {
                    this.page.counter++;
                    this.$refs.myScroll.setState(5);
                    for(let i = 0; i < 10; i++) {
                        this.list.push({})
                    }
                }, 500)
            } else {
                this.$refs.myScroll.setState(7);
            }
        },
        getTop(y) {//滚动条位置

        }
    },
    components: {
        myScroll, demo
    },
    created() {
        console.log(this.$Web3)
    },
    mounted() {
        for(let i = 0; i < 50; i++) {
            this.list.push({})
        }
    }
}
</script>


<style scoped>

</style>
