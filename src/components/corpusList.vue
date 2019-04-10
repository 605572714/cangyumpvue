<template>
  <div style="background:#fff">
    <ul
      class="container"
      v-for="item in corpus_list"
      :key="item.index"
      @click="godetail"
      :id="item.id"
    >
      <li class="left">
        <p class="title">{{item.title}}</p>
        <p class="content">{{item.content}}</p>
      </li>
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
    </ul>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: ["corpus_list"],
  data() {
    return {
      host_img: config.host_img,
      imgfinish: false
    };
  },
  methods: {
    imgFinish() {
      this.imgfinish = true;
    },
    godetail(e) {
      var id = e.currentTarget.id;
      wx.navigateTo({
        url: "../reading?id=" + id,
        success: function(res) {
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      });
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
  }
}
.container:last-child {
  margin-bottom: 0px;
}
</style>
