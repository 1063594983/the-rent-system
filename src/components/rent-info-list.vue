<template>
    <div class="rent-info-list" ref="infoList">
        <rent-info-card v-for="x in num" :key="x"></rent-info-card>
    </div>
</template>

<script>
import rentInfoCard from '@/components/rent-info-card';

export default {
    props: {
        num: {
            type: Number,
            default: 5
        }
    },
    mounted() {
        this.$refs['infoList'].style.height = (window.innerHeight - 100) + 'px';
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
