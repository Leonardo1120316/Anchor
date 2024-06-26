<template>
  <view class="content">
    <!-- coin box -->
    <view class="coin-box">
      <text style="text-align: center">金币数</text>
      <view class="coins-number-box">
        <text class="coins-number">{{ props.coins }}</text>
        <image src="../../static/icons/arrow.svg" class="icon"></image>
      </view>
    </view>

    <!-- daily-box -->
    <uni-card title="每日签到领金币" class="daily-box"  style="width:100%" margin="10px" padding="0px" spacing="20px">
      
      <button
        :disabled="false"
        :loading="false"
        open-type=""
        hover-class="button-hover"
        @click="signIn()"
        class="btn"
        style="
          width: 100%;
          margin: 20px 0px;
          background: #cf86f1;
          border: 1px solid #cf86f1;
          color: white;
        "
      >
        签到领取
      </button>
    </uni-card>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  days: {
    type: Number,
    default: "0",
  },
  coins: {
    type: Number,
    default: "0",
  },
});
const signIn = () => {
  console.log("sign in click");
};
</script>

<style scoped>
.coins-number {
  font-weight: 600;
}
.coins-number-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  transform: translate(10px, 0px);
}
.coin-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  width: 100%;
  padding-top: 30px;
}
.icon {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  line-height: 40px;
  display: inline-block;
}
</style>
