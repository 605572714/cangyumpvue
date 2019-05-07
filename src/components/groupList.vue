<template>
  <div v-if="group_list">
    <img
      class="top_img"
      src="/static/images/group_rule.png"
      alt=""
    >
    <div
      class="container"
      v-for="item in group_list"
      :key="item.index"
    >
      <div class="status">已结束</div>
      <img
        class="image"
        :src="host_img+item.headlines"
        alt=""
      >
      <h1 class="title">{{item.title}}</h1>
      <div class="bot">
        <p class="price">￥{{item.price}}起</p>
        <p class="tap">去看看</p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: ["group_list"],
  data() {
    return {
      host_img: config.host_img
    };
  }
};
</script>

<style lang="scss" scoped>
.top_img {
  width: 750rpx;
  height: 224rpx;
  vertical-align: middle;
  background: #f4f4f4;
}
.container {
  width: 710rpx;
  padding: 0px 20rpx;
  margin-bottom: 20rpx;
  background: #fff;
  .status {
    text-align: center;
    font-size: 28rpx;
    padding: 40rpx 0px;
  }
  .image {
    width: 100%;
    height: 396rpx;
    background: #f4f4f4;
  }
  .title {
    font-size: 32rpx;
    padding-top: 30rpx;
    padding-bottom: 20rpx;
  }
  .bot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60rpx;
    line-height: 60rpx;
    padding-bottom: 30rpx;
    .price {
      font-size: 28rpx;
      color: #bc2e2e;
      align-items: center;
    }
    .tap {
      height: 58rpx;
      width: 160rpx;
      background: rgba(178, 178, 178, 1);
      line-height: 58rpx;
      text-align: center;
      margin-right: 10rpx;
      margin-left: 30rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 4rpx;
    }
  }
}
</style>
