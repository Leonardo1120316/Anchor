<template>
  <view class="content">
    <uni-notice-bar
      single
      show-icon
      text="常使用，点击教你添加到我的小程序"
      style="width: 100%"
      id="noticeBar"
    ></uni-notice-bar>
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text> 视频语音转文字神器 </text>
    </view>
    <button
      :disabled="false"
      :loading="false"
      open-type=""
      hover-class="button-hover"
      @click="start('/pages/convert/index')"
      class="btn"
      style="margin-bottom: 20px;background: #cf86f1; border: 1px solid #cf86f1; color: white"
    >
      开始转文字
    </button>
    <button
      :disabled="false"
      :loading="false"
      open-type=""
      hover-class="button-hover"
      @click="share()"
      class="btn"
      style="margin-bottom:3%;border: 1px solid #cf86f1; color: #cf86f1"
    >
      分享给好友
    </button>
    <view class="box">
      <uni-card padding="0px" class="card" margin="0px" spacing="10px" @click="start('/pages/promotion/index')">
        <image src="../../static/icons/money_bag.svg" style="width:30px;height:30px;margin-left:50%;transform:translate(-50%,0px)"></image>
        <br />
        <text class="card-text"
          >邀请赚佣金</text
        >
      </uni-card>
      <uni-card padding="0px" class="card" margin="0px" spacing="10px" @click="start('/pages/watermark/index')">
        <image src="../../static/icons/eraser.svg" style="width:30px;height:30px;margin-left:50%;transform:translate(-50%,0px)"></image>
        <br />
        <text class="card-text"
          >去水印</text
        >
      </uni-card>
      <uni-card padding="0px" class="card" margin="0px" spacing="10px" @click="start('/pages/forbbiden/index')">
        <image src="../../static/icons/forbidden.svg" style="width:30px;height:30px;margin-left:50%;transform:translate(-50%,0px)"></image>
        <br />
        <text class="card-text"
          >违禁词</text
        >
      </uni-card>
    </view>
    <view class="box">
      <uni-card padding="0px" class="card" margin="0px" spacing="10px" @click="start('/pages/computer/index')">
        <image src="../../static/icons/computer.svg" style="width:30px;height:30px;margin-left:50%;transform:translate(-50%,0px)"></image>
        <br />
        <text class="card-text"
          >电脑版</text
        >
      </uni-card>
    </view>
    <view style="height:50px"></view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello");
const share = () => {
  console.log("share");
};
const start = (pageUrl: String) => {
  uni.navigateTo({url: pageUrl})
};
</script>

<style scoped>
.card-text{
  font-size: 12px; 
  margin-top: 3px; 
  display: inline-block;
  width:100%;
  text-align:center;
}
.box {
  margin-top: 5%;
  display: flex;
  justify-content: left;
  width: 80%;
  flex-wrap: wrap;
}
.box :nth-child(2){
  margin: 0px 5%;
}
.card {
  width: 30%;
  display: inline-block;
}
.icon {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 250rpx;
  width: 250rpx;
  margin: 80rpx auto;
  margin-bottom: 50rpx;
}

.text-area {
  margin-bottom: 80rpx;
  display: flex;
  justify-content: center;
}

.text-area > text {
  font-weight: bold;
  font-size: 20px;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

#noticeBar > view {
  padding: 10px 20px;
}

.btn {
  width: 80%;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: middle;
}
</style>
