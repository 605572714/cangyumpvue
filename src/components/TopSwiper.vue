<template>
  <div>
    <swiper
      :indicator-dots="true"
      :autoplay="true"
      :interval="5000"
      :duration="500"
      :circular="true"
      class="swiper_list"
    >
      <div v-for="imgUrl in imgUrls" :key="imgUrl.id" @click="godetail(imgUrl.type,imgUrl.id)">
        <swiper-item>
          <img class="swiper_img" :src="host_img+imgUrl.pic_url" mode="aspectFill">
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: ["imgUrls"],
  data() {
    return {
      imgUrls: [],
      imgfinish: false,
      host_img: config.host_img
    };
  },
  methods: {
    godetail(type, id) {
      console.log(type, id);
      if (type == 4) {
        this.$router.push({ path: "article/articleDetail?id=" + id });
      } else if (type == 8) {
        this.$router.push({ path: "auction/detail?id=" + id });
      } else if (type == 13) {
        this.$router.push({ path: "prepare/detail?id=" + id });
      } else if (type == 14) {
        this.$router.push({ path: "pickup/detail?id=" + id });
      } else if (type == 15) {
        this.$router.push({ path: "article/seminar?id=" + id });
      } else if (type == 18) {
        this.$router.push({ path: "guess/detail?id=" + id });
      } else if (type == 20) {
        this.$router.push({ path: "fakegoods/detail?id=" + id });
      } else if (type == 22) {
        this.$router.push({ path: "spike/detail?id=" + id });
      } else if (type == 32) {
        this.$router.push({ path: "pinshouqi/detail?id=" + id });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper_list {
  width: 750rpx;
  height: 280rpx;
  .swiper_img {
    width: 750rpx;
    height: 280rpx;
    background: #f4f4f4;
  }
}
</style>
