<template>
<!--
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
    -->
    <up-down-layout>
        <div slot="header">
            <common-header title="租房信息" :right-method="() => {this.isShowMore = !this.isShowMore}"></common-header>
        </div>
        <div slot="body">
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
    </up-down-layout>
</template>

<script>
import rentInfoDetailsCard from '@/components/rent-info-details-card'
import infoDetailsList from '@/data/infoDetails.json'

import UpDownLayout from '@/components/up-down-layout'
import CommonHeader from '@/components/common-header'
export default {
    data() {
        return {
            isShowMore: false,
            infoDetails: null
        }
    },
    created() {
        this.infoDetails = infoDetailsList[this.$route.params['id'] - 1];
    },
    components: {
        rentInfoDetailsCard,
        UpDownLayout,
        CommonHeader
    }
}
</script>

<style scoped>


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
