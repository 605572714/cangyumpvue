<template>
  <div v-if="quality_list">
    <!-- 品质 -->
    <div class="quality">
      <div
        class="quality_list"
        v-for="item in quality_list"
        :key="item.index"
      >
        <div>{{item.title}}<span>{{item.value}}</span></div>
      </div>
    </div>
    <!-- 服务 -->
    <div class="serve">
      <span class="left">服务：</span>
      <div class="right">
        <div class="content">
          <img
            src="/static/images/right.png"
            alt=""
          >
          <span>平台保障</span>
        </div>
        <div class="content">
          <img
            src="/static/images/right.png"
            alt=""
          >
          <span>如实描述</span>
        </div>
        <div class="content">
          <img
            src="/static/images/right.png"
            alt=""
          >
          <span>三日包退</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quality_list"],
  data() {
    return {
      quality_list: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.quality {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
  margin-bottom: 20rpx;
  padding: 40rpx 30rpx;
  .quality_list {
    width: 290rpx;
    font-size: 28rpx;
    padding: 20rpx 50rpx;
    padding-right: 0px;
    border-bottom: 1rpx dashed #dcdde3;
    color: #888;
    span {
      padding-left: 80rpx;
      color: #000;
    }
  }
  .quality_list:nth-child(1) {
    border-top: 1rpx dashed #dcdde3;
  }
  .quality_list:nth-child(2) {
    border-top: 1rpx dashed #dcdde3;
  }
  .quality_list:nth-child(odd) {
    border-right: 1rpx dashed #dcdde3;
  }
}
.serve {
  padding: 30rpx;
  padding-bottom: 0px;
  background: #fff;
  .left {
    float: left;
    width: 20%;
    color: #666;
    font-size: 30rpx;
  }
  .right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    font-size: 30rpx;
    color: #808080;
    .content {
      width: 50%;
      display: flex;
      align-items: center;
      padding-bottom: 30rpx;
      img {
        width: 52rpx;
        height: 42rpx;
        margin-right: 28rpx;
      }
    }
  }
}
</style>
