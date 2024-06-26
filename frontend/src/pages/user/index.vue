<template>
  <view class="content">
    <view class="user-info">
      <image class="user-image"></image>
      <view class="user-message">
        <view class="name-item">{{ username }}</view>
        <view class="time-item">到期时间：{{ endTime }}</view>
        <view class="coin-item">剩余金币：{{ coin }}</view>
      </view>
    </view>
    <view class="user-service">
      <view class="user-card">

        <uni-card-item title="开通会员" des="显示优惠" icon="../../static/icons/diamond.svg" url="/pages/member/index"></uni-card-item>
        <uni-card-item title="推广赚钱" des="高额佣金" icon="../../static/icons/money.svg" url="/pages/promotion/index"></uni-card-item>
        <uni-card-item title="历史记录" icon="../../static/icons/history.svg" url="/pages/history/index"></uni-card-item>
        <uni-card-item title="联系我们" icon="../../static/icons/contact.svg" url="/pages/contact/index"></uni-card-item>
        <uni-card-item title="关于我们" icon="../../static/icons/about.svg" url="/pages/about/index"></uni-card-item>
        
      </view>
    </view>
    <view class=""> </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const username = ref("username");
const endTime = ref("2023-09-20");
const coin = ref(2);
</script>

<style scoped>
.user-card {
  padding-top: 40px;
  height: calc(80vh - 50px);
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;
}
.user-message {
  background: transparent;
}
.user-image {
  margin-right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 1px solid black;
  background: transparent;
}
.user-info {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: start;
  height: 20vh;
  max-height: 200px;
  padding: 20px 0px;
  width: 80%;
  max-width: 500px;
  margin: auto;
  background: transparent;
}
.user-service {
  width: 100%;
  height: calc(80vh - 50px);
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: center top;
  background-size: contain;
  background-image: url("../../static/background-main.jpg");
}
.name-item {
  line-height: 30px;
  font-size: 18px;
  font-weight: 600;
  background: transparent;
}
.time-item {
  font-size: 12px;
  line-height: 20px;
  color: gray;
  background: transparent;
}
.coin-item {
  font-size: 12px;
  line-height: 20px;
  color: gray;
  background: transparent;
}
</style>
