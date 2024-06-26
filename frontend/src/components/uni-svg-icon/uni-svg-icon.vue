<template>
  <view>
    hello
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  name: String,
  color: {
    type: String,
    default: "black",
  },
  width: {
    type: Number,
    default: "16px",
  },
  height: {
    type: Number,
    default: "16px",
  },
});
</script>

<style lang='stylus' scoped></style>
