<template>
    <div class="rent-info-list" ref="infoList">
        <house-info-card v-for="(x, index) in cardList" :key="index" :card-info="x"></house-info-card>
    </div>
</template>

<script>
import HouseInfoCard from './house-info-card';

export default {
    props: {
        cardList: {
            type: Array
        }
    },
    mounted() {
        this.$refs['infoList'].style.height = (window.innerHeight - 140) + 'px';
    },
    components: {
        HouseInfoCard
    }    
}
</script>

<style scoped>
.rent-info-list {
    margin-top: 20px;
    overflow-y: scroll;
}
</style>
