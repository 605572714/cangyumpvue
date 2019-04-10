<template>
  <div v-if="product_list">
    <div
      v-for="item in product_list"
      :key="item.index"
    >
      <img
        class="container_img"
        v-if="!imgfinish"
        mode="aspectFill"
        src="/static/images/imgfinish.jpg"
      >
      <p
        class="price_icon"
        v-if="imgfinish&&item.status==1"
      >即将开始</p>
      <p
        class="price_icon"
        v-else-if="imgfinish"
      >出价{{item.bid_number}}次</p>
      <img
        :class="!imgfinish?'no_image':'container_img'"
        mode="aspectFill"
        :src="host_img+item.pic_url"
        @load="imgFinish"
      >
      <div class="container">
        <div class="container_left">
          <p class="container_title">{{item.title}}</p>
          <div class="container_price">
            起拍价格
            <p>￥{{item.highest_price}}</p>
          </div>
        </div>
        <div
          class="container_right"
          v-if="item.status==1||item.status==2"
        >去看看</div>
        <div
          class="container_right gray"
          v-else-if="item.status==3&&item.bid_number==0"
        >已结束</div>
        <div
          class="container_right gray"
          v-else
        >已成交</div>
      </div>
    </div>
  </div>
</template> 

<script>
import config from "@/config";
export default {
  props: ["product_list"],
  data() {
    return {
      host_img: config.host_img,
      imgfinish: false
    };
  },
  methods: {
    imgFinish() {
      this.imgfinish = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.no_image {
  width: 0px;
  height: 0px;
}
.container_img {
  width: 690rpx;
  height: 380rpx;
  margin: 0 30rpx;
  vertical-align: middle;
  border-radius: 8rpx 8rpx 0 0;
}
.price_icon {
  font-size: 24rpx;
  color: #fff;
  margin-left: 50rpx;
  position: absolute;
  z-index: 99;
  background: #bc2e2e;
  padding: 10rpx 35rpx;
  height: 32rpx;
  line-height: 32rpx;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 30rpx 30rpx;
  height: 122rpx;
  border: 1px solid #d9d9d9;
  border-top: 0px;
  border-radius: 0 0 8rpx 8rpx;
  .container_left {
    display: flex;
    flex-direction: column;
    padding-left: 20rpx;
    .container_title {
      margin-top: 20rpx;
      font-size: 32rpx;
      color: #000;
    }
    .container_price {
      display: flex;
      flex-direction: row;
      margin-top: 16rpx;
      font-size: 24rpx;
      height: 20rpx;
      line-height: 20rpx;
      color: #888;
      p {
        font-size: 36rpx;
        color: #bc2e2e;
        padding-left: 6rpx;
      }
    }
  }
  .container_right {
    margin-right: 20rpx;
    border-radius: 4rpx;
    margin-top: 30rpx;
    width: 160rpx;
    height: 60rpx;
    line-height: 60rpx;
    background: #bc2e2e;
    text-align: center;
    font-size: 28rpx;
    color: #fff;
  }
  .gray {
    background-color: #cbcbcb;
    color: #fff;
  }
}
</style>
