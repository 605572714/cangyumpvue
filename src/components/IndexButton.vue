<template>
  <div class="container">
    <a
      href="prepare/list"
      class="container_content"
      hover-class="none"
    >
      <div class="container_title">团购</div>
      <div class="container_describe">低价格高回报</div>
      <img
        class="container_img"
        src="../../static/images/prepare.png"
        mode="aspectFit"
      >
    </a>
    <a
      class="container_content"
      href="fakegoods/list"
      hover-class="none"
    >
      <div class="container_title">臻品</div>
      <div class="container_describe">巧夺天工</div>
      <img
        class="container_img"
        src="../../static/images/fakeGoods.png"
        mode="aspectFit"
      >
    </a>
    <a
      class="container_content"
      hover-class="none"
      href="spike/list"
    >
      <div class="container_title">秒杀</div>
      <div class="container_describe">低价抢美玉</div>
      <img
        class="container_img"
        src="../../static/images/spike.png"
        mode="aspectFit"
      >
    </a>
    <a
      class="container_content_end"
      href="identify/list"
      hover-class='none'
    >
      <div class="container_title">鉴定</div>
      <div class="container_describe">官方掌眼人</div>
      <img
        class="container_img"
        src="../../static/images/identify.png"
        mode="aspectFit"
      >
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  width: 750rpx;
  display: flex;
  margin-bottom: 20rpx;
  flex-direction: row;
  .container_content {
    width: 187.5rpx;
    border-right: 1rpx solid #d9d9d9;
    text-align: center;
  }
  .container_content_end {
    width: 187.5rpx;
    text-align: center;
  }
  .container_title {
    font-size: 30rpx;
    margin-top: 40rpx;
    font-weight: bold;
  }
  .container_describe {
    font-size: 20rpx;
    color: #888;
    margin: 10rpx auto;
  }
  .container_img {
    width: 54rpx;
    height: 54rpx;
    margin-bottom: 40rpx;
  }
}
</style>
