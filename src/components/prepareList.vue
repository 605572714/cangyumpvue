<template>
  <div
    class="page"
    v-if="list"
  >
    <div
      class="container"
      v-for="item in list"
      :key="item.index"
    >
      <div
        @click="goto"
        :id="item.id"
      >
        <p
          class="status"
          v-if="item.type==1"
        >进行中</p>
        <p
          class="status"
          v-else-if="item.type==2"
        >制作中</p>
        <p
          class="status"
          v-else-if="item.type==3"
        >发货中</p>
        <p
          class="end"
          v-else
        >已结束</p>
        <image
          class="image"
          :src="host_img+item.pic_url"
          mode='aspectFill'
        />
        <div class="content">
          <div class="content_title">{{item.title}}</div>
          <div class="progress">
            <van-progress
              :percentage="item.schedule"
              :color="item.schedule<100?'#bc2e2e':'linear-gradient(90deg, #d43131, #751c75)'"
            />
            <div class="price">￥{{item.price_least}}起</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: ["prepare_list"],
  data() {
    return {
      host_img: config.host_img,
      list: null,
      imgfinish: false
    };
  },
  // 监听方法获取数组
  watch: {
    prepare_list(list) {
      this.list = list;
    }
  },

  methods: {
    goto(e) {
      var id = e.currentTarget.id;
      this.$router.push({ path: "detail?id=" + id });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  background: #fff;
  width: 100%;
  .container {
    background: #fff;
    float: left;
    width: 345rpx;
    padding: 10rpx 0rpx 30rpx 20rpx;
    .no_image {
      width: 0px;
      height: 0px;
    }
    .status {
      display: inline-block;
      font-size: 24rpx;
      color: #fff;
      width: 120rpx;
      height: 44rpx;
      position: absolute;
      text-align: center;
      margin: 0rpx 20rpx;
      z-index: 99;
      background: #bc2e2e;
      line-height: 44rpx;
    }
    .end {
      display: inline-block;
      background: #000;
      text-align: center;
      position: absolute;
      width: 150rpx;
      border-radius: 50%;
      height: 150rpx;
      padding: inherit;
      opacity: 0.5;
      font-size: 28rpx;
      line-height: 150rpx;
      color: #fff;
      margin: 95rpx;
    }
    .image {
      width: 345rpx;
      height: 345rpx;
      border-radius: 8rpx;
      background: #f4f4f4;
    }
    .content {
      padding: 20rpx 5rpx;
      .content_title {
        font-size: 32rpx;
        height: 100rpx;
        line-height: 46rpx;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden; /** 隐藏超出的内容 **/
      }
      .progress {
        padding: 10rpx 0px;
        .price {
          padding-top: 10rpx;
          font-size: 28rpx;
          color: #bc2e2e;
        }
      }
    }
  }
  .container:nth-child(even) {
    padding: 10rpx 20rpx 30rpx 20rpx;
  }
}
</style>
