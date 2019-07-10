<template>
  <div class="main">
    <div class="header">
        <slot name="header"></slot>
    </div>
    <div class="body">
        <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.main .header {
  border: 1px solid red;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.main .body {
  border: 1px solid red;
  position: relative;
  width: 100%;
  top: 56px;
  z-index: 1;
}
</style>
