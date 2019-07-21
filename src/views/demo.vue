<template>

</template>

<script>

export default {
  data() {
    return {

    };
  },
  created() {
    this.$axios.get(this.$api + "/house/getHouse", {
      params: {
        size: 20
      }
    }).then(res => {
      this.cardList = res.data;
      /*
      for (let item of this.cardList) {
        item.details = JSON.parse(item.details)
      }*/
    })
  },
  methods: {

  },
  components: {

  }
};
</script>

<style scoped>
</style>
