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
      :id="item.id"
      @click="godetail"
    >
      <img
        class="image"
        :src="host_img+item.headlines"
        alt=""
      >
      <h1 class="title">{{item.screenings_des}}</h1>
      <p class="content">{{item.content}}</p>
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
      loading: true
    };
  },
  onLoad() {
    this.requestList();
  },
  methods: {
    async requestList() {
      const fakegoods = await get("spike_screenings_list", {
        token: config.token
      });
      this.fakegoods_list = fakegoods.list;
      this.loading = false;
      console.log(this.fakegoods_list);
    },
    godetail(e) {
      var id = e.currentTarget.id;
      wx.navigateTo({
        url: "auction?id=" + id
      });
    }
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
    margin-bottom: 20rpx;
  }
}
</style>
