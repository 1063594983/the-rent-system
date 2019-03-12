<template>
    <div class="rent-info-details">
        <div class="header">
            <div class="left">
                <i class="el-icon-arrow-left" @click="$router.go(-1)">返回</i>
            </div>
            <div class="title">
                <h4>租房信息</h4>
            </div>
            <div class="right">
                <i class="el-icon-more" @click="isShowMore = !isShowMore"></i>
            </div>
        </div>
        <div class="image-carousel">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <img src="../assets/logo.png" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <rent-info-details-card></rent-info-details-card>
        <div v-if="isShowMore" class="more">
            More
        </div>
    </div>
</template>

<script>
import rentInfoDetailsCard from '@/components/rent-info-details-card'

export default {
    data() {
        return {
            isShowMore: false
        }
    },
    created() {
        console.log(this.$Contract)
        //this.$Contract.createUser("1", "2");
    },
    methods: {
        onSlide(e) {
            console.log(e);
        }
    },
    components: {
        rentInfoDetailsCard
    }
}
</script>

<style scoped>
.rent-info-details {
    /*text-align: center;*/
}

.header {
    /*border: 1px solid red;*/
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
}

.left {
    color: #909399;
}

.right {
    color: #909399;
}

.title {
    margin: 0 auto;
}

@keyframes showMore {
    from {
        height: 0;
    }

    to {
        height: 100px;
    }
}

.more {
    animation: showMore 0.5s linear;
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    background: white;
    z-index: 10;
}
</style>
