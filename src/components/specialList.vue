<template>
  <div>
    <ul
      class="container"
      v-for="item in special_list"
      :key="item.index"
    >
      <img
        class="image"
        v-if="!imgfinish"
        src="/static/images/imgfinish.jpg"
        mode="aspectFill"
      >
      <img
        :class="!imgfinish?'no_image':'image'"
        :src="host_img+item.pic_article"
        @load="imgFinish"
        mode="aspectFill"
      >
      <li class="title">{{item.title}}</li>
    </ul>
  </div>

</template>

<script>
import config from "@/config";
export default {
  props: ["special_list"],
  data() {
    return {
      host_img: config.host_img,
      imgfinish: false
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
.container {
  width: 690rpx;
  margin: 30rpx;
  height: 480rpx;
  border-radius: 8rpx;
  border: 1px solid #ccc;
  .no_iamge {
    width: 0px;
    height: 0px;
  }
  .image {
    width: 100%;
    height: 380rpx;
    background: #d9d9d9;
    border-radius: 8rpx 8rpx 0 0;
  }
  .title {
    font-size: 32rpx;
    color: #333;
    padding: 20rpx;
  }
}
</style>
