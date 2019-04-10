<template>
  <div v-if="img">
    <img
      class="top_img"
      :src="host_img+img"
      alt=""
    >
    <div
      class="contianer"
      v-for="item in list"
      :key="item.index"
    >
      <img
        v-if="!imgfinish"
        class="img"
        src="/static/images/imgfinish.jpg"
      > <img
        :class="imgfinish?'img':'no_img'"
        :src="host_img+item.pic_url"
        @load="imgFinish"
      >
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
  mounted() {
    console.log(this.$mp.query);
    this.img = this.$mp.query.image;
    this.id = this.$mp.query.id;
    this.type = this.$mp.query.type;
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
    imgFinish() {
      this.imgfinish = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.top_img {
  width: 100%;
  height: 420rpx;
}
.contianer {
  width: 710rpx;
  padding: 20rpx;
  display: flex;
  border-bottom: 0.5px solid #d9d9d9;
  .no_img {
    width: 0px;
    height: 0px;
  }
  .img {
    width: 200rpx;
    height: 200rpx;
    border-radius: 8rpx;
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
