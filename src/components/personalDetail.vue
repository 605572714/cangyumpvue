<template>
  <div class="content">
    <div
      class="content_detail"
      href=""
    >
      <img
        class="icon"
        src="/static/images/paimai_geren.png"
        alt=""
      >
      <p class="title">我的拍卖</p>
    </div>
    <div
      class="content_detail"
      href=""
    >
      <img
        class="icon"
        src="/static/images/prepare_geren.png"
        alt=""
      >
      <p class="title">我的团购</p>
    </div>
    <a
      class="content_detail_right"
      href=""
    >
      <img
        class="icon"
        src="/static/images/pickup_geren.png"
        alt=""
      >
      <p class="title">我的捡漏</p>
    </a>
    <a
      class="content_detail"
      href=""
    >
      <img
        class="icon"
        src="/static/images/guess_geren.png"
        alt=""
      >
      <p class="title">我的猜价</p>
    </a>
    <a
      class="content_detail"
      href=""
    >
      <img
        class="icon"
        src="/static/images/miaosha_geren.png"
        alt=""
      >
      <p class="title">我的秒杀</p>
    </a>
    <a
      class="content_detail_right"
      href=""
    >
      <img
        class="icon"
        src="/static/images/zhongtuan_geren.png"
        alt=""
      >
      <p class="title">我的众团</p>
    </a>
    <a
      class="content_detail"
      href=""
    >
      <img
        class="icon"
        src="/static/images/pinshouqi_geren.png"
        alt=""
      >
      <p class="title">我的拼手气</p>
    </a>
    <a
      class="content_detail"
      href=""
    >
      <img
        class="icon"
        src="/static/images/address_geren.png"
        alt=""
      >
      <p class="title">地址管理</p>
    </a>

    <a
      class="content_detail_right"
      href=""
    >
      <img
        class="icon"
        src="/static/images/cangyu_geren.png"
        alt=""
      >
      <p class="title">关于藏玉</p>
    </a>
    <a
      class="content_detail_bottom"
      href=""
    >
      <img
        class="icon"
        src="/static/images/kefu_geren.png"
        alt=""
      >
      <p class="title">联系客服</p>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  width: 750rpx;
  height: 724rpx;
  background: #fff;
  .content_detail {
    float: left;
    width: 248rpx;
    height: 180rpx;
    border-right: 1rpx solid #d9d9d9;
    border-bottom: 1rpx solid #d9d9d9;
    vertical-align: middle;
    text-align: center;
    font-size: 24rpx;
    color: #666;
    .icon {
      width: 50rpx;
      height: 50rpx;
      margin-top: 48rpx;
    }
  }
  .content_detail_right {
    float: right;
    width: 248rpx;
    height: 180rpx;
    border-bottom: 1rpx solid #d9d9d9;
    vertical-align: middle;
    text-align: center;
    font-size: 24rpx;
    color: #666;
    .icon {
      width: 50rpx;
      height: 50rpx;
      margin-top: 48rpx;
    }
  }
    .content_detail_bottom {
    float: left;
    width: 248rpx;
    height: 180rpx;
    border-right: 1rpx solid #d9d9d9;
    vertical-align: middle;
    text-align: center;
    font-size: 24rpx;
    color: #666;
    .icon {
      width: 50rpx;
      height: 50rpx;
      margin-top: 48rpx;
    }
  }
}
</style>
