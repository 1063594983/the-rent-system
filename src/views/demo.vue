<template>
  <div>
    <up-down-layout>
      <div slot="header">
        <common-header></common-header>
      </div>
      <div slot="body">body</div>
    </up-down-layout>
  </div>
</template>

<script>
import UpDownLayout from "@/components/up-down-layout";
import CommonHeader from "@/components/common-header";
export default {
  components: {
    UpDownLayout,
    CommonHeader
  }
};
</script>


<style scoped>

</style>
