<template>
    <div class="rent-info-list" ref="infoList">
        <rent-info-card v-for="(x, index) in cardList" :key="index" :card-info="x"></rent-info-card>
    </div>
</template>

<script>
import rentInfoCard from '@/components/rent-info-card';

export default {
    props: {
        num: {
            type: Number,
            default: 5
        },
        cardList: {
            type: Array
        }
    },
    mounted() {
        this.$refs['infoList'].style.height = (window.innerHeight - 140) + 'px';
    },
    components: {
        rentInfoCard
    }    
}
</script>

<style scoped>
.rent-info-list {
    margin-top: 20px;
    overflow-y: scroll;
}
</style>
