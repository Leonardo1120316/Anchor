<template>
    <view class="user-item" @click="jump(props.url)">
          <view class="left">
            <image :src="props.icon"></image>
            <text class="title">{{props.title}}</text>
          </view>
          <view class="right">
            <text class="des">{{props.des}}</text>
            <image :src="props.arrow"></image>
          </view>
    </view>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  des: {
    type: String,
    default: "",
  },
  arrow: {
    type: String,
    default: "../../static/icons/arrow.svg",
  },
  url: {
    type: String,
    default: "/pages/home/index",
  },
});
const jump = (pageUrl: String) => {
  uni.navigateTo({url: pageUrl})
};
</script>

<style scoped>
.title {
  color: black;
  line-height: 40px;
}
.des {
  color: gray;
  line-height: 40px;
  margin-right: 10px;
}
.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
}
.left {
  display: flex;
  align-items: center;
  width: 50%;
}
.user-item {
  height: 40px;
  margin: auto;
  display: flex;
  vertical-align: middle;
  width: 80%;
}
.user-item image {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  line-height: 40px;
  display: inline-block;
}
</style>
