<template>
  <view class="content">
    <uni-daily style="width:100%"></uni-daily>
    <uni-card title="做任务 领福利" class="daily-box" style="width:100%" margin="10px" padding="0px" spacing="20px"></uni-card>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
