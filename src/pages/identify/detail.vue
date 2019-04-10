<template>
  <div v-if="identify_list">
    <div class="head">
      <identifyList :identify_list="identify_list" />
    </div>
    <div
      class="container"
      v-if="comment_list"
    >评论（{{comment_list.length}}）条</div>
    <div
      class="content"
      v-for="item in comment_list"
      :key="item"
    >
      <img
        :src="host_img+item.comment_avatar"
        class="avatar"
      >
      <div class="right">
        <div style='color:#d3d3d3'>{{item.nickname}}</div>
        <div class="comment"><span v-if="item.tonickname">回复 <span style="color:#d3d3d3">{{item.tonickname}}：</span></span>{{item.comment}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/util";
import config from "@/config";
import identifyList from "@/components/identifyList";
export default {
  components: { identifyList },
  data() {
    return {
      identify_list: null,
      comment_list: null,
      host_img: config.host_img
    };
  },
  onLoad(options) {
    this.id = options.id;
    this.request();
  },
  methods: {
    async request() {
      // 请求头部信息
      const request_list = await get("details_identify", {
        token: config.token,
        id: this.id
      });
      var item = request_list;
      var str = item.album[0].file_path;
      if (str.indexOf("cangyu9") != -1) {
        request_list.haveHead = 1;
      } else {
        request_list.haveHead = 0;
      }
      this.identify_list = request_list;
      console.log(this.identify_list);
      // 请求评论信息
      const comment_list = await get("comment_lists", {
        id: this.id,
        token: config.token,
        type: 2,
        allLists: 1
      });
      this.comment_list = comment_list.list;
      console.log(this.comment_list);
    }
  }
};
</script>

<style lang="scss" scoped>
.head {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;
}
.container {
  height: 100rpx;
  width: 720rpx;
  padding-left: 30rpx;
  line-height: 100rpx;
  font-size: 30rpx;
  color: #a28555;
  background: #fff;
}
.content {
  display: flex;
  flex-direction: row;
  background: #fff;
  padding: 30rpx;
  border-top: 1rpx solid #d9d9d9;
  .avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    background: #f4f4f4;
  }
  .right {
    width: 580rpx;
    display: flex;
    flex-direction: column;
    padding-left: 30rpx;
    font-size: 30rpx;
  }
}
</style>
