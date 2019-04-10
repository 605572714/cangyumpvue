<template>
  <div>
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <video
      v-if="list.video_url"
      class="video"
      :src="list.video_url"
      autoplay
    />
    <img
      v-else
      :src="host_img+list.headlines"
      class="video"
    >
    <p
      class="status"
      :style="currentColor"
    >进行中<span>距离结束还剩 08:08:08</span></p>
    <div class="head">
      <h1 class="title">{{list.title}}</h1>
      <p class="price">￥{{list.now_price}}<span>原价￥{{list.old_price}}</span></p>
    </div>
    <Quality :quality_list="quality_list" />
    <div class="content">
      <h1>详<span>细描</span>述</h1>
      <p>{{list.content}}</p>
      <div
        v-for="item in list.album"
        :key="item"
        class="imgs"
      >
        <img
          class="img"
          src="/static/images/imgfinish.jpg"
          v-if="!imgfinish"
        >
        <img
          :src="host_img+item.file_path"
          :class="!imgfinish?'no_img':'img'"
          @load="imgFinish"
        >
      </div>
    </div>
    <div class="bottom">
      <button
        class="bottom_left"
        open-type="contact"
        :send-message-title="list.title"
        show-message-card="true"
        hover-class='none'
      >
        <img
          class="bottom_img"
          src="/static/images/kefu.png"
          alt=""
        >
        <p class="bottom_text">客服</p>
      </button>
      <div
        class="bottom_right"
        :style="backgroundColor"
      >
        <p v-if="list.status==1">未开始</p>
        <p
          v-else-if="list.status==2"
          @click="godetail"
        >立即购买</p>
        <p v-else-if="list.status==3">已结束</p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
import Quality from "@/components/Quality";
import { get } from "@/util";
export default {
  components: {
    Quality
  },
  data() {
    return {
      list: [],
      loading: true,
      imgfinish: false,
      quality_list: [],
      currentColor: "",
      host_img: config.host_img
    };
  },
  mounted() {
    this.id = this.$mp.query.id;
    this.request();
  },
  methods: {
    async request() {
      const list = await get("spike_details", {
        token: config.token,
        id: this.id
      });
      this.list = list.list;
      this.quality_list = this.list.attributes;
      this.loading = false;
      //   改变状态颜色
      if (this.list.status == 1) {
        this.currentColor = "background:#FFE7D4;color:#575757;";
      } else if (this.list.status == 2) {
        this.backgroundColor = "background:#bc2e2e;";
        this.currentColor = "background:#F89649;";
      }
      console.log(this.list);
    },
    imgFinish() {
      this.imgfinish = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.video {
  width: 750rpx;
  vertical-align: middle;
}
.status {
  display: flex;
  justify-content: space-between;
  width: 690rpx;
  height: 76rpx;
  line-height: 76rpx;
  padding: 0px 30rpx;
  background: #b8b8b8;
  color: #fff;
  font-size: 36rpx;
  span {
    font-size: 28rpx;
  }
}
.head {
  background: #fff;
  padding-left: 30rpx;
  .title {
    padding-top: 40rpx;
    font-size: 36rpx;
    color: #333;
  }
  .price {
    display: flex;
    margin-top: 15rpx;
    font-size: 48rpx;
    color: #bc2e2e;
    align-items: center;
    span {
      font-size: 24rpx;
      color: #9a9a9a;
      text-decoration: line-through;
      padding-left: 20rpx;
    }
  }
}
.content {
  margin-top: 20rpx;
  width: 690rpx;
  background: #fff;
  padding: 40rpx 30rpx 98rpx;
  h1 {
    text-align: center;
    font-size: 32rpx;
    color: #333;
    span {
      border-bottom: 1rpx solid #e9e9e9;
      padding-bottom: 15rpx;
    }
  }
  p {
    font-size: 28rpx;
    color: #666;
    margin: 30rpx 0px;
  }
  .imgs {
    width: 690rpx;
    height: 418rpx;
    margin-bottom: 20rpx;
    .no_img {
      width: 0px;
      height: 0px;
    }
    .img {
      width: 100%;
      height: 100%;
    }
  }
}
.bottom {
  width: 100%;
  height: 98rpx;
  background: #bbb;
  position: fixed;
  bottom: 0px;
  .bottom_left {
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    font-size: 30rpx;
    background: #fafafa;
    color: #7f7f7f;
    .bottom_img {
      width: 33rpx;
      height: 33rpx;
      margin-right: 10rpx;
    }
  }
  .bottom_right {
    text-align: center;
    line-height: 98rpx;
    color: #fff;
    font-size: 30rpx;
  }
}
button::after {
  border: none;
  border-radius: 0;
}
</style>
