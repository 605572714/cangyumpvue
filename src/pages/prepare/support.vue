<template>
  <div v-if="img">
    <img class="top_img" :src="host_img+img" alt>
    <div class="contianer" v-for="item in list" :key="item.index" @click="godetail(item.id)">
      <img class="img" :src="host_img+item.pic_url">
      <div class="content">
        <span class="title">{{item.title}}</span>
        <span class="support">限额{{item.total}}份 剩余{{item.last_total}}份</span>
        <div class="content_price">
          <span class="price">¥{{item.price}}</span>
          <span class="gopay">去支持</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
import { get } from "@/util";
export default {
  data() {
    return {
      host_img: config.host_img,
      imgfinish: false,
      img: "",
      id: "",
      list: "",
      type: ""
    };
  },
  onLoad(options) {
    this.img = options.image;
    this.id = options.id;
    this.type = options.type;
    this.requestList();
  },
  methods: {
    async requestList() {
      const list = await get("prepare_support_list", {
        id: this.id
      });
      this.list = list.list;
      console.log(this.list);
    },
    godetail(id) {
      wx.navigateTo({
        url: "supportdetail?id=" + id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top_img {
  width: 100%;
  height: 420rpx;
  background: #f4f4f4;
}
.contianer {
  width: 710rpx;
  padding: 20rpx;
  display: flex;
  border-bottom: 0.5px solid #d9d9d9;
  .img {
    width: 200rpx;
    height: 200rpx;
    border-radius: 8rpx;
    background: #f4f4f4;
  }
  .content {
    width: 490rpx;
    height: 200rpx;
    padding: 0px 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    font-size: 30rpx;
    color: #333;
  }
  .support {
    font-size: 24rpx;
    display: block;
    color: #888;
  }
  .content_price {
    display: flex;
    justify-content: space-between;
    .price {
      font-size: 36rpx;
      color: #bc2e2e;
      align-self: flex-end;
    }
    .gopay {
      background: #bc2e2e;
      color: #fff;
      font-size: 28rpx;
      width: 160rpx;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      border-radius: 8rpx;
    }
  }
}
</style>
