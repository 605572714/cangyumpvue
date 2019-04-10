<template>
  <div>
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <div
      class="container"
      v-for="item in fakegoods_list"
      :key="item.index"
      @click="godetail"
      :id="item.id"
    >
      <img
        v-if="!imgfinish"
        class="image"
        src="/static/images/imgfinish.jpg"
      > <img
        :class="imgfinish?'image':'no_img'"
        :src="host_img+item.pic_url"
        @load="imgFinish"
      >
      <h1 class="title">{{item.title}}</h1>
      <p class="content">{{item.content}}</p>
    </div>
    <div
      class="no_data"
      v-if="no_data"
    >
      无更多数据
    </div>
  </div>
</template>

<script>
import { get } from "@/util";
import config from "@/config";
export default {
  data() {
    return {
      host_img: config.host_img,
      fakegoods_list: [],
      imgfinish: false,
      loading: true,
      no_data: false,
      page: 0
    };
  },
  mounted() {
    this.requestList();
  },
  methods: {
    // 获取数据
    async requestList() {
      const fakegoods = await get("fakeGoods_list", {
        token: config.token,
        page: this.page
      });
      this.fakegoods_list = this.fakegoods_list.concat(fakegoods.list);
      this.loading = false;
      if (this.fakegoods_list.length == fakegoods.total) {
        this.no_data = true;
      }
    },
    // 跳转详情页面
    godetail(e) {
      var id = e.currentTarget.id;
      wx.navigateTo({
        url: "detail?id=" + id
      });
    },
    // 图片加载完成
    imgFinish() {
      this.imgfinish = true;
    }
  },
  // 下拉刷新方法，与methods方法同级
  onPullDownRefresh() {
    this.page = 0;
    this.loading = true;
    this.fakegoods_list = [];
    this.no_data = false;
    this.requestList();
    // 停止下拉刷新
    wx.stopPullDownRefresh();
  },

  // 上拉加载，拉到底部触发
  onReachBottom() {
    this.loading = true;
    this.page += 10;
    this.requestList();
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  padding: 20rpx;
  .image {
    width: 710rpx;
    height: 364rpx;
    border-radius: 8rpx;
  }
  .no_img {
    width: 0px;
    height: 0px;
  }
  .title {
    padding-top: 20rpx;
    font-size: 32rpx;
    color: #333;
  }
  .content {
    font-size: 28rpx;
    color: #888;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden; /** 隐藏超出的内容 **/
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    margin-top: 10rpx;
    margin-bottom: 20rpx;
  }
}
.no_data {
  font-size: 28rpx;
  text-align: center;
  color: #888;
  padding: 20rpx;
}
</style>
