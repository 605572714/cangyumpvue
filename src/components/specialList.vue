<template>
  <div>
    <ul
      class="container"
      v-for="item in special_list"
      :key="item.index"
      @tap="godetail"
      :id="item.id"
    >
      <img
        class="image"
        :src="host_img+item.pic_article"
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
    godetail(e) {
      var id = e.currentTarget.id;
      this.$router.push({ path: "article/seminar?id=" + id });
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
  .image {
    width: 100%;
    height: 380rpx;
    background: #f4f4f4;
    border-radius: 8rpx 8rpx 0 0;
  }
  .title {
    font-size: 32rpx;
    color: #333;
    padding: 20rpx;
  }
}
</style>
