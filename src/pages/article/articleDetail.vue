<template>
  <div class="page">
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <h1 class="title">{{detail.content}}</h1>
    <img
      class="img"
      :src="host_img+detail.pic_url"
      alt=""
    >
    <wxParse :content="detail.custom_page" />
  </div>
</template>

<script>
import { get } from "@/util";
import config from "@/config";
import wxParse from "mpvue-wxparse";
export default {
  components: {
    wxParse
  },
  data() {
    return {
      host_img: config.host_img,
      loading: true,
      detail: []
    };
  },
  onLoad(options) {
    Object.assign(this.$data, this.$options.data()); 
    this.id = options.id;
    this.requestList();
  },
  methods: {
    async requestList() {
      const list = await get("article_details", {
        id: this.id
      });
      this.detail = list[0];
      this.loading = false;
      console.log(this.detail);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.page {
  background: #fff;
  width: 690rpx;
  height: 100%;
  padding: 30rpx;
  .title {
    font-size: 40rpx;
    color: #333;
  }
  .img {
    width: 100%;
    height: 420rpx;
    background: #f4f4f4;
  }
}
</style>
