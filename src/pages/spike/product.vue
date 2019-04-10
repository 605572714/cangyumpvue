<template>
  <div id="page">
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <!-- 头部 -->
    <div class="top">
      <p class="time">{{header.endTime}}</p>
      <img
        src="/static/images/fen.png"
        class="back"
      >
      <p class="title">{{header.screenings_des}}·{{header.total}}件商品</p>
      <ruleList
        :rule="header.rule"
        :type='4'
      />
    </div>
    <!-- 详情 -->
    <div
      class="content"
      v-for="item in list"
      :key="item"
      @click="godetail"
      :id="item.id"
    >
      <span
        v-if="imgfinish"
        class="status"
      >进行中</span>
      <img
        v-if="!imgfinish"
        src="/static/images/imgfinish.jpg"
        class="img"
        mode="aspectFill"
      >
      <img
        :src="host_img+item.pic_url"
        :class="!imgfinish?'no_img':'img'"
        mode="aspectFill"
        @load="imgFinish"
      >
      <p class="title">{{item.content}}</p>
      <p class="old_price">原价<span>￥{{item.old_price}}</span></p>
      <p class="price">秒杀价<span>￥{{item.price}}</span></p>
    </div>
  </div>
</template>

<script>
import { get } from "@/util";
import config from "@/config";
import ruleList from "@/components/ruleList";
export default {
  components: { ruleList },
  data() {
    return {
      id: "",
      list: [],
      header: [],
      loading: true,
      imgfinish: false,
      host_img: config.host_img
    };
  },
  onLoad() {
    Object.assign(this.$data, this.$options.data());
  },
  mounted() {
    this.id = this.$mp.query.id;
    this.request();
  },
  methods: {
    // 获取数据
    async request() {
      const list = await get("spike_list", {
        token: config.token,
        id: this.id
      });
      this.list = list.list;
      this.header = list.header;
      this.header.rule = "秒杀";
      this.loading = false;
      console.log(this.list);
    },
    // 图片加载
    imgFinish() {
      this.imgfinish = true;
    },
    // 跳转详情
    godetail(e) {
      var id = e.currentTarget.id;
      wx.navigateTo({
        url: "detail?id=" + id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#page {
  background: #fff;
  overflow: hidden;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  .back {
    margin-top: 50rpx;
    width: 690rpx;
    height: 116rpx;
  }
  .time {
    margin-top: 50rpx;
    line-height: 96rpx;
    position: absolute;
  }
  .title {
    margin-top: 20rpx;
    font-size: 32rpx;
    color: #333;
  }
}
.content {
  float: left;
  margin-left: 20rpx;
  margin-top: 10rpx;
  width: 345rpx;
  .no_img {
    width: 0px;
    height: 0px;
  }
  .img {
    width: 345rpx;
    height: 350rpx;
    border-radius: 8rpx;
  }
  .status {
    position: absolute;
    width: 136rpx;
    height: 42rpx;
    line-height: 42rpx;
    background: #f2f2f2;
    font-size: 24rpx;
    color: #888;
    text-align: center;
    margin-left: 20rpx;
  }
  .title {
    margin-top: 20rpx;
    font-size: 32rpx;
    color: #333;
  }
  .old_price {
    font-size: 24rpx;
    margin-top: 10rpx;
    color: #888;
    span {
      text-decoration: line-through;
      margin-left: 10rpx;
    }
  }
  .price {
    font-size: 24rpx;
    color: #333;
    display: flex;
    align-items: center;
    margin: 10rpx auto;
    span {
      color: #bc2e2e;
      font-size: 36rpx;
    }
  }
}
</style>
