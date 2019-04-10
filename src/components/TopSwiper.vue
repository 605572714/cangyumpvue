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
            v-if="!imgfinish"
            src="/static/images/imgfinish.jpg"
            mode='aspectFill'
          >
          <img
            :class="!imgfinish?'no_image':'swiper_img'"
            :src="host_img+imgUrl.pic_url"
            @load="imgFinish"
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
  },
  methods: {
    imgFinish() {
      this.imgfinish = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper_list {
  width: 750rpx;
  height: 280rpx;
  .no_image {
    width: 0px;
    height: 0px;
  }
  .swiper_img {
    width: 750rpx;
    height: 280rpx;
  }
}
</style>
