<template>
    <div class="rent-info-details" v-if="infoDetails != null">
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
                <el-carousel-item v-for="item in infoDetails.imgNum" :key="item">
                    <img :src="'../../static/image/house/h' + $route.params['id'] + '-' + item + '.jpg'">
                </el-carousel-item>
            </el-carousel>
        </div>
        <rent-info-details-card :info-details="infoDetails"></rent-info-details-card>
        <div v-if="isShowMore" class="more">
            More
        </div>
    </div>
</template>

<script>
import rentInfoDetailsCard from '@/components/rent-info-details-card'
import infoDetailsList from '@/data/infoDetails.json'
export default {
    data() {
        return {
            isShowMore: false,
            infoDetails: null
        }
    },
    created() {
        this.infoDetails = infoDetailsList[this.$route.params['id'] - 1];
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
    height: 56px;
    width: 100%;
    align-items: center;
    position: fixed;
    border-bottom: 1px solid #eaeaea;
    margin: -8px -8px 0;
    padding: 0 16px;
    z-index: 1000;
    background-color: white;
    box-sizing: border-box;
}

.left {
    flex: 1;
    color: #909399;
}

.right {
    flex: 1;
    color: #909399;
    text-align: end;
}

.title {
    flex: 1;
    text-align: center;
}

.image-carousel {
    padding-top: 60px;
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

img {
    height: 100%;
}
</style>
