<template>
  <div
    style="background:#fff"
    v-if="corpus_list"
  >
    <div
      class="container"
      v-for="item in corpus_list"
      :key="item.id"
      @click="godetail"
      :id="item.id"
    >
      <div class="left">
        <p class="title">{{item.title}}</p>
        <p class="content">{{item.content}}</p>
      </div>
      <img
        class="right"
        v-if="!imgfinish"
        mode='aspectFill'
        src="/static/images/imgfinish.jpg"
      />
      <img
        :class="!imgfinish?'no_image':'right'"
        mode='aspectFill'
        @load="imgFinish"
        :src="host_img+item.pic_header"
      />
    </div>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: ["corpus_list"],
  data() {
    return {
      host_img: config.host_img,
      imgfinish: false,
      corpus_list: []
    };
  },
  onLoad() {
    console.log(this.corpus_list);
    this.corpus_list;
  },
  watch: {
    corpus_list(list) {
      this.list = list;
      console.log("这是列表");
      console.log(list);
      console.log("这是列表");
    }
  },
  methods: {
    imgFinish() {
      this.imgfinish = true;
    },
    godetail(e) {
      var id = e.currentTarget.id;
      this.$router.push({ path: "/pages/article/articleDetail?id=" + id });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 690rpx;
  margin: 0 30rpx 20rpx;
  height: 270rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-color: #000;
  border: 0.5px #dcdde3 solid;
  border-radius: 8rpx;
  .left {
    width: 380rpx;
    padding-left: 20rpx;
    padding-right: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-size: 32rpx;
      margin-bottom: 10rpx;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 2; /** 显示的行数 **/
      overflow: hidden; /** 隐藏超出的内容 **/
    }
    .content {
      font-size: 28rpx;
      color: #888;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
      -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
      -webkit-line-clamp: 2; /** 显示的行数 **/
      overflow: hidden; /** 隐藏超出的内容 **/
    }
  }
  .no_image {
    width: 0px;
    height: 0px;
  }
  .right {
    width: 270rpx;
    height: 270rpx;
    border-radius: 0 8rpx 8rpx 0;
    background: #f4f4f4;
  }
}
.container:last-child {
  margin-bottom: 0px;
}
</style>
