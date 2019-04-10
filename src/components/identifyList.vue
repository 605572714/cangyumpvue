<template>
  <div>
    <img
      class="avatar"
      :src="imgfinish?host_img+identify_list.avatar:'/static/images/avatar.png'"
      @load="imgFinish"
      @error="imgError"
    >
    <div class="nick">{{identify_list.nickname}}
      <p :class="identify_list.rating>7?'heightlevel':'lowlevel'">LV.{{identify_list.rating}}</p>
    </div>
    <p class="time">{{identify_list.createdate}}</p>
    <p class="content">{{identify_list.content}}</p>
    <div
      class="images"
      :style="identify_list.album.length==4?'width:600rpx':''"
    >
      <div
        v-for="img in identify_list.album"
        :key="img"
        type="primary"
        @click.stop="bindImage(identify_list.album,identify_list.haveHead,index)"
        :dataset-list="img.file_path"
      >
        <img
          class="image"
          :style="identify_list.album.length==1?'width:460rpx;height:460rpx;':''"
          :src="identify_list.haveHead==1?img.file_path:host_img+img.file_path"
          mode="aspectFill"
          @load="imgFinish"
        >
      </div>
    </div>
    <!-- 邀请掌眼 -->
    <div
      v-if="identify_list.palm.length!=0"
      class="palm"
    >
      <span class="span">邀请掌眼:</span>
      <div class="p">
        <div
          class="plam_name"
          v-for="item in identify_list.palm"
          :key="item"
        >
          <span>{{item.nickname}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
import { previewImage } from "@/util";
export default {
  props: ["identify_list"],
  data() {
    return {
      imgfinish: false,
      host_img: config.host_img
    };
  },
  methods: {
    //加载图片完成
    imgFinish() {
      this.imgfinish = true;
    },
    /**
     * 图片加载失败
     */
    imgError() {
      // this.imgfinish = false;
    },
    /**
     * 点击放大图片
     */
    async bindImage(imgs, head, index) {
      previewImage(imgs, head, index);
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-right: 20rpx;
  float: left;
}
.nick {
  display: flex;
  flex-direction: row;
  font-size: 28rpx;
  align-items: center;
  .heightlevel {
    margin-left: 16rpx;
    background: #fbdd6c;
    border-radius: 3px;
    width: 62rpx;
    height: 32rpx;
    line-height: 32rpx;
    font-size: 20rpx;
    text-align: center;
  }
  .lowlevel {
    margin-left: 16rpx;
    background: #f6f7f9;
    border-radius: 3px;
    height: 32rpx;
    width: 54rpx;
    line-height: 32rpx;
    font-size: 20rpx;
    text-align: center;
  }
}
.time {
  color: #888;
  font-size: 26rpx;
  margin-bottom: 32rpx;
  margin-top: 6rpx;
}
.content {
  font-size: 32rpx;
  margin-bottom: 30rpx;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 3; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.images {
  width: 720rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .image {
    width: 226rpx;
    height: 226rpx;
    margin-right: 6rpx;
    margin-bottom: 6rpx;
    vertical-align: middle;
  }
}
.palm {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 28rpx;
  color: #a28555;
  margin-top: 10rpx;
  margin-bottom: 20rpx;
  .span {
    width: 20%;
    flex-wrap: nowrap;
  }
  .p {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .plam_name {
      padding-left: 10rpx;
    }
  }
}
</style>
