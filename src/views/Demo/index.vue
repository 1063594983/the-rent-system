<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created() {
    console.log(this.$store.state.User.userInfo)
    this.$store.dispatch('demo')
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 300px;
}
</style>

