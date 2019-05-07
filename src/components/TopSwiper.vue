<template>
  <div>
    <swiper
      :indicator-dots="true"
      :autoplay="true"
      :interval="5000"
      :duration="500"
      :circular='true'
      class='swiper_list'
    >
      <div
        v-for="imgUrl in imgUrls"
        :key="imgUrl.id"
      >
        <swiper-item>
          <img
            class="swiper_img"
            :src="host_img+imgUrl.pic_url"
            mode='aspectFill'
          >
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
